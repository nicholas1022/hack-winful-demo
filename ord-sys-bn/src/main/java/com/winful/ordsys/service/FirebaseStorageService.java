package com.winful.ordsys.service;

import com.google.auth.Credentials;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Objects;
import java.util.UUID;

@Service
public class FirebaseStorageService {

    @Value("${firebase.bucket}")
    private String firebaseBucket;

    @Value("${firebase.private-key-file-path}")
    private String firebasePrivateKeyFile;

    @Value("${firebase.download-base-url}")
    private String downloadBaseUrl;

    private String uploadFile(MultipartFile multipartFile, String fileName) throws IOException {
        BlobId blobId = BlobId.of(firebaseBucket, fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("media").build();
        InputStream inputStream = new FileInputStream(firebasePrivateKeyFile);
        Credentials credentials = GoogleCredentials.fromStream(inputStream);
        Storage storage = StorageOptions.newBuilder().setCredentials(credentials).build().getService();
        storage.create(blobInfo, multipartFile.getBytes());

        return String.format(downloadBaseUrl, URLEncoder.encode(fileName, StandardCharsets.UTF_8));
    }

    public String uploadFile(MultipartFile multipartFile) {
        try {
            String fileName = UUID.randomUUID().toString().concat("-" + Objects.requireNonNull(multipartFile.getOriginalFilename()));
            return uploadFile(multipartFile, fileName);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Image couldn't upload, Something went wrong");
        }
    }
}

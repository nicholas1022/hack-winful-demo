package com.winful.ordsys.api.impl;

import com.winful.ordsys.api.ProductApiDelegate;
import com.winful.ordsys.dto.ProductDTO;
import com.winful.ordsys.dto.ProductImgDTO;
import com.winful.ordsys.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductApiDelegateImpl implements ProductApiDelegate {

    private ProductService productService;

    @Autowired
    public ProductApiDelegateImpl(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public ResponseEntity<ProductDTO> createProduct(ProductDTO productDTO) {
        return ResponseEntity.ok(productService.saveProduct(productDTO));
    }

    @Override
    public ResponseEntity<Void> deleteProduct(Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<ProductDTO> getProduct(Long id) {
        return ResponseEntity.ok(productService.getProduct(id));
    }

    @Override
    public ResponseEntity<List<ProductDTO>> getProducts(String brand) {
        return ResponseEntity.ok(productService.getProducts(brand));
    }

    @Override
    public ResponseEntity<ProductDTO> updateProduct(ProductDTO productDTO) {
        return ResponseEntity.ok(productService.saveProduct(productDTO));
    }

    @Override
    public ResponseEntity<Void> confirmOnHoldQty(List<Long> requestBody) {
        productService.confirmOnHoldQty(requestBody);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<ProductImgDTO> uploadPrdImg(MultipartFile img) {
        return ResponseEntity.ok(productService.uploadPrdImg(img));
    }

    @Override
    public ResponseEntity<List<String>> getAllBrands() {
        return ResponseEntity.ok(productService.getAllBrands());
    }
}

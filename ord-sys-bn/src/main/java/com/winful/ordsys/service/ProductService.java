package com.winful.ordsys.service;

import com.winful.ordsys.dto.ProductDTO;
import com.winful.ordsys.mapper.ProductMapper;
import com.winful.ordsys.model.Product;
import com.winful.ordsys.repository.ProductRepository;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class ProductService {

    private ProductRepository productRepository;

    private ProductMapper productMapper;

    @Autowired
    public ProductService(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    public ProductDTO saveProduct(ProductDTO productDTO) {
        Product product = productMapper.productDTOtoProduct(productDTO);
        Product savedProduct = productRepository.save(product);
        return productMapper.productToProductDTO(savedProduct);
    }

    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) throw new RuntimeException("ID NOT FOUND");
        productRepository.deleteById(id);
    }

    public ProductDTO getProduct(Long id) {
        return productMapper.productToProductDTO(
            productRepository.findById(id).orElseThrow(
                () -> new RuntimeException("ID NOT FOUND")
            )
        );
    }

    public List<ProductDTO> getProducts(String brand) {
        List<Product> productList;
        Sort sort = Sort.by("name");
        if (StringUtils.isBlank(brand)) {
            productList = productRepository.findAll(sort);
        } else {
            productList = productRepository.findAllByBrand(brand, sort);
        }
        return productList.stream().map(productMapper::productToProductDTO).toList();
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void confirmOnHoldQty(List<Long> idList) {
        if (idList != null && !idList.isEmpty()) {
            idList.forEach((id) -> productRepository.confirmOnHoldQty(id));
        }
    }

}

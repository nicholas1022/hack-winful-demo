package com.winful.ordsys.mapper;

import com.winful.ordsys.dto.ProductDTO;
import com.winful.ordsys.model.Product;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-04-15T00:03:12-0400",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.2 (Homebrew)"
)
@Component
public class ProductMapperImpl implements ProductMapper {

    @Override
    public ProductDTO productToProductDTO(Product product) {
        if ( product == null ) {
            return null;
        }

        ProductDTO productDTO = new ProductDTO();

        productDTO.setPlu( product.getPlu() );
        productDTO.setName( product.getName() );
        productDTO.setBrand( product.getBrand() );
        productDTO.setQty( product.getQty() );
        productDTO.setOnHoldQty( product.getOnHoldQty() );
        productDTO.setDefaultPrice( product.getDefaultPrice() );
        productDTO.setImgUrl( product.getImgUrl() );

        return productDTO;
    }

    @Override
    public Product productDTOtoProduct(ProductDTO productDTO) {
        if ( productDTO == null ) {
            return null;
        }

        Product product = new Product();

        product.setPlu( productDTO.getPlu() );
        product.setName( productDTO.getName() );
        product.setBrand( productDTO.getBrand() );
        product.setQty( productDTO.getQty() );
        product.setOnHoldQty( productDTO.getOnHoldQty() );
        product.setImgUrl( productDTO.getImgUrl() );
        product.setDefaultPrice( productDTO.getDefaultPrice() );

        return product;
    }
}

package com.winful.ordsys.mapper;

import com.winful.ordsys.dto.ProductDTO;
import com.winful.ordsys.model.Product;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-04-05T08:58:14-0400",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.38.0.v20240325-1403, environment: Java 17.0.10 (Eclipse Adoptium)"
)
@Component
public class ProductMapperImpl implements ProductMapper {

    @Override
    public ProductDTO productToProductDTO(Product product) {
        if ( product == null ) {
            return null;
        }

        ProductDTO productDTO = new ProductDTO();

        productDTO.setBrand( product.getBrand() );
        productDTO.setName( product.getName() );
        productDTO.setOnHoldQty( product.getOnHoldQty() );
        productDTO.setPlu( product.getPlu() );
        productDTO.setQty( product.getQty() );

        return productDTO;
    }

    @Override
    public Product productDTOtoProduct(ProductDTO productDTO) {
        if ( productDTO == null ) {
            return null;
        }

        Product product = new Product();

        product.setBrand( productDTO.getBrand() );
        product.setName( productDTO.getName() );
        product.setOnHoldQty( productDTO.getOnHoldQty() );
        product.setPlu( productDTO.getPlu() );
        product.setQty( productDTO.getQty() );

        return product;
    }
}

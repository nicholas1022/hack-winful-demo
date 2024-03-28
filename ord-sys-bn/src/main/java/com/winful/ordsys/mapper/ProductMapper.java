package com.winful.ordsys.mapper;

import com.winful.ordsys.dto.ProductDTO;
import com.winful.ordsys.model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper( ProductMapper.class );

    ProductDTO productToProductDTO(Product product);
    Product productDTOtoProduct(ProductDTO productDTO);
}

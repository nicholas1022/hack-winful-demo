package com.winful.ordsys.mapper;

import com.winful.ordsys.dto.OrderDTO;
import com.winful.ordsys.model.Order;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper( OrderMapper.class );

    OrderDTO orderToOrderDTO(Order order);
    Order oderDTOtoOrder(OrderDTO orderDTO);
}

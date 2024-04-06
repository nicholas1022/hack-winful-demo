package com.winful.ordsys.mapper;

import com.winful.ordsys.dto.OrderDTO;
import com.winful.ordsys.dto.OrderDetailDTO;
import com.winful.ordsys.dto.ProductDTO;
import com.winful.ordsys.model.Order;
import com.winful.ordsys.model.OrderDetail;
import com.winful.ordsys.model.Product;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-04-06T01:51:08-0400",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.2 (Homebrew)"
)
@Component
public class OrderMapperImpl implements OrderMapper {

    @Override
    public OrderDTO orderToOrderDTO(Order order) {
        if ( order == null ) {
            return null;
        }

        OrderDTO orderDTO = new OrderDTO();

        orderDTO.setOrderId( order.getOrderId() );
        orderDTO.setContactName( order.getContactName() );
        orderDTO.setCompanyName( order.getCompanyName() );
        orderDTO.setEmail( order.getEmail() );
        orderDTO.setAddress( order.getAddress() );
        orderDTO.setDeliverDate( order.getDeliverDate() );
        orderDTO.setStatus( order.getStatus() );
        orderDTO.setOrderDetails( orderDetailListToOrderDetailDTOList( order.getOrderDetails() ) );

        return orderDTO;
    }

    @Override
    public Order oderDTOtoOrder(OrderDTO orderDTO) {
        if ( orderDTO == null ) {
            return null;
        }

        Order order = new Order();

        order.setOrderId( orderDTO.getOrderId() );
        order.setContactName( orderDTO.getContactName() );
        order.setCompanyName( orderDTO.getCompanyName() );
        order.setEmail( orderDTO.getEmail() );
        order.setAddress( orderDTO.getAddress() );
        order.setDeliverDate( orderDTO.getDeliverDate() );
        order.setStatus( orderDTO.getStatus() );
        order.setOrderDetails( orderDetailDTOListToOrderDetailList( orderDTO.getOrderDetails() ) );

        return order;
    }

    protected ProductDTO productToProductDTO(Product product) {
        if ( product == null ) {
            return null;
        }

        ProductDTO productDTO = new ProductDTO();

        productDTO.setPlu( product.getPlu() );
        productDTO.setName( product.getName() );
        productDTO.setBrand( product.getBrand() );
        productDTO.setQty( product.getQty() );
        productDTO.setOnHoldQty( product.getOnHoldQty() );

        return productDTO;
    }

    protected OrderDetailDTO orderDetailToOrderDetailDTO(OrderDetail orderDetail) {
        if ( orderDetail == null ) {
            return null;
        }

        OrderDetailDTO orderDetailDTO = new OrderDetailDTO();

        orderDetailDTO.setOrderDetailId( orderDetail.getOrderDetailId() );
        orderDetailDTO.setProduct( productToProductDTO( orderDetail.getProduct() ) );
        orderDetailDTO.setQty( orderDetail.getQty() );
        orderDetailDTO.setPrice( orderDetail.getPrice() );

        return orderDetailDTO;
    }

    protected List<OrderDetailDTO> orderDetailListToOrderDetailDTOList(List<OrderDetail> list) {
        if ( list == null ) {
            return null;
        }

        List<OrderDetailDTO> list1 = new ArrayList<OrderDetailDTO>( list.size() );
        for ( OrderDetail orderDetail : list ) {
            list1.add( orderDetailToOrderDetailDTO( orderDetail ) );
        }

        return list1;
    }

    protected Product productDTOToProduct(ProductDTO productDTO) {
        if ( productDTO == null ) {
            return null;
        }

        Product product = new Product();

        product.setPlu( productDTO.getPlu() );
        product.setName( productDTO.getName() );
        product.setBrand( productDTO.getBrand() );
        product.setQty( productDTO.getQty() );
        product.setOnHoldQty( productDTO.getOnHoldQty() );

        return product;
    }

    protected OrderDetail orderDetailDTOToOrderDetail(OrderDetailDTO orderDetailDTO) {
        if ( orderDetailDTO == null ) {
            return null;
        }

        OrderDetail orderDetail = new OrderDetail();

        orderDetail.setOrderDetailId( orderDetailDTO.getOrderDetailId() );
        orderDetail.setProduct( productDTOToProduct( orderDetailDTO.getProduct() ) );
        orderDetail.setQty( orderDetailDTO.getQty() );
        orderDetail.setPrice( orderDetailDTO.getPrice() );

        return orderDetail;
    }

    protected List<OrderDetail> orderDetailDTOListToOrderDetailList(List<OrderDetailDTO> list) {
        if ( list == null ) {
            return null;
        }

        List<OrderDetail> list1 = new ArrayList<OrderDetail>( list.size() );
        for ( OrderDetailDTO orderDetailDTO : list ) {
            list1.add( orderDetailDTOToOrderDetail( orderDetailDTO ) );
        }

        return list1;
    }
}

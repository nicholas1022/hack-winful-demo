package com.winful.ordsys.api.impl;

import com.winful.ordsys.api.OrderApiDelegate;
import com.winful.ordsys.dto.OrderDTO;
import com.winful.ordsys.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderApiDelegateImpl implements OrderApiDelegate {

    private OrderService orderService;

    @Autowired
    public OrderApiDelegateImpl(OrderService orderService) {
        this.orderService = orderService;
    }

    @Override
    public ResponseEntity<OrderDTO> createOrder(OrderDTO orderDTO) {
        return ResponseEntity.ok(orderService.saveOrder(orderDTO));
    }

    @Override
    public ResponseEntity<OrderDTO> getOrder(Long id) {
        return ResponseEntity.ok(orderService.getOrder(id));
    }

    @Override
    public ResponseEntity<List<OrderDTO>> getOrders(String deliverDate) {
        return ResponseEntity.ok(orderService.getOrders(deliverDate));
    }

    @Override
    public ResponseEntity<OrderDTO> updateOrder(OrderDTO orderDTO) {
        return ResponseEntity.ok(orderService.saveOrder(orderDTO));
    }

    @Override
    public ResponseEntity<Void> deleteOrder(Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Void> orderDelivered(Long id) {
        orderService.orderDelivered(id);
        return ResponseEntity.ok().build();
    }
}

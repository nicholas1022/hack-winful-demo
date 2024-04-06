package com.winful.ordsys.service;

import com.winful.ordsys.dto.OrderDTO;
import com.winful.ordsys.mapper.OrderMapper;
import com.winful.ordsys.model.Order;
import com.winful.ordsys.repository.OrderRepository;
import com.winful.ordsys.repository.ProductRepository;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class OrderService {
    private OrderRepository orderRepository;

    private OrderMapper orderMapper;

    private ProductRepository productRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, ProductRepository productRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.orderMapper = orderMapper;
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public OrderDTO saveOrder(OrderDTO orderDTO) {
        if (orderDTO.getOrderDetails() != null && !orderDTO.getOrderDetails().isEmpty()) {
            orderDTO.getOrderDetails().forEach((od) -> {
                if (od.getProduct() != null && od.getProduct().getPlu() != null && od.getQty() != null) {
                    if (productRepository.countByIdAndAvailQty(od.getProduct().getPlu(), od.getQty()) <= 0) {
                        throw new RuntimeException("Order qty is greater than available qty");
                    } else {
                        productRepository.addOnHoldQty(od.getProduct().getPlu(), od.getQty());
                    }
                }
            });
        }
        orderDTO.setStatus(OrderDTO.StatusEnum.CONFIRMED);
        return orderMapper.orderToOrderDTO(orderRepository.save(orderMapper.oderDTOtoOrder(orderDTO)));
    }

    public void deleteOrder(Long id) {
        if (!orderRepository.existsById(id)) throw new RuntimeException("ID NOT FOUND");
        orderRepository.deleteById(id);
    }

    public OrderDTO getOrder(Long id) {
        return orderMapper.orderToOrderDTO(
            orderRepository.findById(id).orElseThrow(
                () -> new RuntimeException("ID NOT FOUND")
            )
        );
    }

    public List<OrderDTO> getOrders(String deliverDate) {
        List<Order> orderList;
        if (StringUtils.isBlank(deliverDate)) {
            orderList = orderRepository.findAllByStatus(OrderDTO.StatusEnum.CONFIRMED);
        } else {
            orderList = orderRepository.findAllByDeliverDateAndStatus(LocalDate.parse(deliverDate), OrderDTO.StatusEnum.CONFIRMED);
        }
        return orderList.stream().map(orderMapper::orderToOrderDTO).toList();
    }

    @Transactional
    public void orderDelivered(Long id) {
        if (!orderRepository.existsById(id)) throw new RuntimeException("ID NOT FOUND");
        Order order = orderRepository.findById(id).get();
        if (order.getStatus().equals(OrderDTO.StatusEnum.DELIVERED)) throw new RuntimeException("Already delivered");
        orderRepository.updateStatus(id, OrderDTO.StatusEnum.DELIVERED);
        if (order.getOrderDetails() != null && !order.getOrderDetails().isEmpty()) {
            order.getOrderDetails().forEach(orderDetail -> {
                if (orderDetail.getProduct() != null && orderDetail.getQty() != null) {
                    productRepository.confirmOnHoldQty(orderDetail.getProduct().getPlu(), orderDetail.getQty());
                }
            });
        }
    }
}

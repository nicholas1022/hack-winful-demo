package com.winful.ordsys.repository;


import com.winful.ordsys.dto.OrderDTO;
import com.winful.ordsys.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByDeliverDate(LocalDate date);
    List<Order> findAllByStatus(OrderDTO.StatusEnum status);
    List<Order> findAllByDeliverDateAndStatus(LocalDate date, OrderDTO.StatusEnum status);

    @Modifying
    @Query(value = "update Order o set o.status = ?2 where o.orderId = ?1")
    void updateStatus(Long id, OrderDTO.StatusEnum status);
}

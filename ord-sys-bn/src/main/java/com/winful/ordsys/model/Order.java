package com.winful.ordsys.model;

import com.winful.ordsys.dto.OrderDTO;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order extends AbstractAuditable{
    @Id
    @GeneratedValue
    @Column(name = "order_id")
    private Long orderId;

    private String contactName;

    private String companyName;

    private String email;

    private String address;

    private LocalDate deliverDate;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "order_id")
    private List<OrderDetail> orderDetails = new ArrayList<>();

    private OrderDTO.StatusEnum status;

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getDeliverDate() {
        return deliverDate;
    }

    public void setDeliverDate(LocalDate deliverDate) {
        this.deliverDate = deliverDate;
    }

    public OrderDTO.StatusEnum getStatus() {
        return status;
    }

    public void setStatus(OrderDTO.StatusEnum status) {
        this.status = status;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }
}

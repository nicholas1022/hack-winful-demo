package com.winful.ordsys.model;

import jakarta.persistence.*;

@Entity
public class OrderDetail extends AbstractAuditable {
    @Id
    @GeneratedValue
    @Column(name = "order_detail_id")
    private Long orderDetailId;

    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name = "plu")
    private Product product;

    private Double qty;

    private Double price;

    public Long getOrderDetailId() {
        return orderDetailId;
    }

    public void setOrderDetailId(Long orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Double getQty() {
        return qty;
    }

    public void setQty(Double qty) {
        this.qty = qty;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}

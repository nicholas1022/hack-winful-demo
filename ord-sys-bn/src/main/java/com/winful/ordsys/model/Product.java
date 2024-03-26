package com.winful.ordsys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Product extends AbstractAuditable{
    @Id
    @GeneratedValue
    private Long plu;

    private String name;

    private String brand;

    private Double qty;

    private Double onHoldQty;

    private String photoLink;

//    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
//    private List<OrderDetail> orderDetails;

    public Long getPlu() {
        return plu;
    }

    public void setPlu(Long plu) {
        this.plu = plu;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Double getQty() {
        return qty;
    }

    public void setQty(Double qty) {
        this.qty = qty;
    }

    public Double getOnHoldQty() {
        return onHoldQty;
    }

    public void setOnHoldQty(Double onHoldQty) {
        this.onHoldQty = onHoldQty;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

//    public List<OrderDetail> getOrderDetails() {
//        return orderDetails;
//    }
//
//    public void setOrderDetails(List<OrderDetail> orderDetails) {
//        this.orderDetails = orderDetails;
//    }
}

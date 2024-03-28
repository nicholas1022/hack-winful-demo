package com.winful.ordsys.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.annotation.Generated;
import javax.validation.Valid;
import java.util.Objects;

/**
 * OrderDetailDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-03-25T14:48:21.210539-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
public class OrderDetailDTO {

  private Long orderDetailId;

  private ProductDTO product;

  private Double qty;

  private Double price;

  public OrderDetailDTO orderDetailId(Long orderDetailId) {
    this.orderDetailId = orderDetailId;
    return this;
  }

  /**
   * Get orderDetailId
   * @return orderDetailId
  */
  
  @Schema(name = "orderDetailId", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("orderDetailId")
  public Long getOrderDetailId() {
    return orderDetailId;
  }

  public void setOrderDetailId(Long orderDetailId) {
    this.orderDetailId = orderDetailId;
  }

  public OrderDetailDTO product(ProductDTO product) {
    this.product = product;
    return this;
  }

  /**
   * Get product
   * @return product
  */
  @Valid 
  @Schema(name = "product", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("product")
  public ProductDTO getProduct() {
    return product;
  }

  public void setProduct(ProductDTO product) {
    this.product = product;
  }

  public OrderDetailDTO qty(Double qty) {
    this.qty = qty;
    return this;
  }

  /**
   * Get qty
   * @return qty
  */
  
  @Schema(name = "qty", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("qty")
  public Double getQty() {
    return qty;
  }

  public void setQty(Double qty) {
    this.qty = qty;
  }

  public OrderDetailDTO price(Double price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * @return price
  */
  
  @Schema(name = "price", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("price")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderDetailDTO orderDetailDTO = (OrderDetailDTO) o;
    return Objects.equals(this.orderDetailId, orderDetailDTO.orderDetailId) &&
        Objects.equals(this.product, orderDetailDTO.product) &&
        Objects.equals(this.qty, orderDetailDTO.qty) &&
        Objects.equals(this.price, orderDetailDTO.price);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderDetailId, product, qty, price);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderDetailDTO {\n");
    sb.append("    orderDetailId: ").append(toIndentedString(orderDetailId)).append("\n");
    sb.append("    product: ").append(toIndentedString(product)).append("\n");
    sb.append("    qty: ").append(toIndentedString(qty)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}


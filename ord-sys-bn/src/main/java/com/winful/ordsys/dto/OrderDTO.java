package com.winful.ordsys.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.format.annotation.DateTimeFormat;

import javax.annotation.Generated;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * OrderDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-03-25T14:48:21.210539-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
public class OrderDTO {

  private Long orderId;

  private String contactName;

  private String companyName;

  private String email;

  private String address;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  private LocalDate deliverDate;

  /**
   * Gets or Sets status
   */
  public enum StatusEnum {
    CONFIRMED("confirmed"),
    
    DELIVERED("delivered");

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static StatusEnum fromValue(String value) {
      for (StatusEnum b : StatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  private StatusEnum status;

  @Valid
  private List<@Valid OrderDetailDTO> orderDetails;

  public OrderDTO orderId(Long orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Get orderId
   * @return orderId
  */
  
  @Schema(name = "orderId", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("orderId")
  public Long getOrderId() {
    return orderId;
  }

  public void setOrderId(Long orderId) {
    this.orderId = orderId;
  }

  public OrderDTO contactName(String contactName) {
    this.contactName = contactName;
    return this;
  }

  /**
   * Get contactName
   * @return contactName
  */
  
  @Schema(name = "contactName", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("contactName")
  public String getContactName() {
    return contactName;
  }

  public void setContactName(String contactName) {
    this.contactName = contactName;
  }

  public OrderDTO companyName(String companyName) {
    this.companyName = companyName;
    return this;
  }

  /**
   * Get companyName
   * @return companyName
  */
  
  @Schema(name = "companyName", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("companyName")
  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  public OrderDTO email(String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
  */
  
  @Schema(name = "email", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("email")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public OrderDTO address(String address) {
    this.address = address;
    return this;
  }

  /**
   * Get address
   * @return address
  */
  
  @Schema(name = "address", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("address")
  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public OrderDTO deliverDate(LocalDate deliverDate) {
    this.deliverDate = deliverDate;
    return this;
  }

  /**
   * Get deliverDate
   * @return deliverDate
  */
  @Valid 
  @Schema(name = "deliverDate", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("deliverDate")
  public LocalDate getDeliverDate() {
    return deliverDate;
  }

  public void setDeliverDate(LocalDate deliverDate) {
    this.deliverDate = deliverDate;
  }

  public OrderDTO status(StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
  */
  
  @Schema(name = "status", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("status")
  public StatusEnum getStatus() {
    return status;
  }

  public void setStatus(StatusEnum status) {
    this.status = status;
  }

  public OrderDTO orderDetails(List<@Valid OrderDetailDTO> orderDetails) {
    this.orderDetails = orderDetails;
    return this;
  }

  public OrderDTO addOrderDetailsItem(OrderDetailDTO orderDetailsItem) {
    if (this.orderDetails == null) {
      this.orderDetails = new ArrayList<>();
    }
    this.orderDetails.add(orderDetailsItem);
    return this;
  }

  /**
   * Get orderDetails
   * @return orderDetails
  */
  @Valid 
  @Schema(name = "orderDetails", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("orderDetails")
  public List<@Valid OrderDetailDTO> getOrderDetails() {
    return orderDetails;
  }

  public void setOrderDetails(List<@Valid OrderDetailDTO> orderDetails) {
    this.orderDetails = orderDetails;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderDTO orderDTO = (OrderDTO) o;
    return Objects.equals(this.orderId, orderDTO.orderId) &&
        Objects.equals(this.contactName, orderDTO.contactName) &&
        Objects.equals(this.companyName, orderDTO.companyName) &&
        Objects.equals(this.email, orderDTO.email) &&
        Objects.equals(this.address, orderDTO.address) &&
        Objects.equals(this.deliverDate, orderDTO.deliverDate) &&
        Objects.equals(this.status, orderDTO.status) &&
        Objects.equals(this.orderDetails, orderDTO.orderDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderId, contactName, companyName, email, address, deliverDate, status, orderDetails);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderDTO {\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    contactName: ").append(toIndentedString(contactName)).append("\n");
    sb.append("    companyName: ").append(toIndentedString(companyName)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    deliverDate: ").append(toIndentedString(deliverDate)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    orderDetails: ").append(toIndentedString(orderDetails)).append("\n");
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


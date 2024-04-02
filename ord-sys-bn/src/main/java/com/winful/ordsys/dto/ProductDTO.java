package com.winful.ordsys.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.annotation.Generated;
import java.util.Objects;

/**
 * ProductDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-03-31T00:36:09.343895-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
public class ProductDTO {

  private Long plu;

  private String name;

  private String brand;

  private Double qty;

  private Double onHoldQty;

  private String imgUrl;

  public ProductDTO plu(Long plu) {
    this.plu = plu;
    return this;
  }

  /**
   * Get plu
   * @return plu
  */
  
  @Schema(name = "plu", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("plu")
  public Long getPlu() {
    return plu;
  }

  public void setPlu(Long plu) {
    this.plu = plu;
  }

  public ProductDTO name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  */
  
  @Schema(name = "name", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("name")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public ProductDTO brand(String brand) {
    this.brand = brand;
    return this;
  }

  /**
   * Get brand
   * @return brand
  */
  
  @Schema(name = "brand", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("brand")
  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public ProductDTO qty(Double qty) {
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

  public ProductDTO onHoldQty(Double onHoldQty) {
    this.onHoldQty = onHoldQty;
    return this;
  }

  /**
   * Get onHoldQty
   * @return onHoldQty
  */
  
  @Schema(name = "onHoldQty", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("onHoldQty")
  public Double getOnHoldQty() {
    return onHoldQty;
  }

  public void setOnHoldQty(Double onHoldQty) {
    this.onHoldQty = onHoldQty;
  }

  public ProductDTO imgUrl(String imgUrl) {
    this.imgUrl = imgUrl;
    return this;
  }

  /**
   * Get imgUrl
   * @return imgUrl
  */
  
  @Schema(name = "imgUrl", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("imgUrl")
  public String getImgUrl() {
    return imgUrl;
  }

  public void setImgUrl(String imgUrl) {
    this.imgUrl = imgUrl;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductDTO productDTO = (ProductDTO) o;
    return Objects.equals(this.plu, productDTO.plu) &&
        Objects.equals(this.name, productDTO.name) &&
        Objects.equals(this.brand, productDTO.brand) &&
        Objects.equals(this.qty, productDTO.qty) &&
        Objects.equals(this.onHoldQty, productDTO.onHoldQty) &&
        Objects.equals(this.imgUrl, productDTO.imgUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(plu, name, brand, qty, onHoldQty, imgUrl);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductDTO {\n");
    sb.append("    plu: ").append(toIndentedString(plu)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    brand: ").append(toIndentedString(brand)).append("\n");
    sb.append("    qty: ").append(toIndentedString(qty)).append("\n");
    sb.append("    onHoldQty: ").append(toIndentedString(onHoldQty)).append("\n");
    sb.append("    imgUrl: ").append(toIndentedString(imgUrl)).append("\n");
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


package com.winful.ordsys.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.annotation.Generated;
import java.util.Objects;

/**
 * ProductImgDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-03-30T22:39:56.845970-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
public class ProductImgDTO {

  private String msg;

  private String imgUrl;

  public ProductImgDTO msg(String msg) {
    this.msg = msg;
    return this;
  }

  /**
   * Get msg
   * @return msg
  */
  
  @Schema(name = "msg", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("msg")
  public String getMsg() {
    return msg;
  }

  public void setMsg(String msg) {
    this.msg = msg;
  }

  public ProductImgDTO imgUrl(String imgUrl) {
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
    ProductImgDTO productImgDTO = (ProductImgDTO) o;
    return Objects.equals(this.msg, productImgDTO.msg) &&
        Objects.equals(this.imgUrl, productImgDTO.imgUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(msg, imgUrl);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductImgDTO {\n");
    sb.append("    msg: ").append(toIndentedString(msg)).append("\n");
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


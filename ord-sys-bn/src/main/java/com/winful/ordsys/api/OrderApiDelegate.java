package com.winful.ordsys.api;

import com.winful.ordsys.dto.OrderDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.NativeWebRequest;

import javax.annotation.Generated;
import java.util.List;
import java.util.Optional;

/**
 * A delegate to be called by the {@link OrderApiController}}.
 * Implement this interface with a {@link org.springframework.stereotype.Service} annotated class.
 */
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-04-06T00:29:16.910561-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
public interface OrderApiDelegate {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * POST /order : create case
     *
     * @param orderDTO  (optional)
     * @return Order info (status code 200)
     * @see OrderApi#createOrder
     */
    default ResponseEntity<OrderDTO> createOrder(OrderDTO orderDTO) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"orderDetails\" : [ { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 }, { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 } ], \"address\" : \"address\", \"orderId\" : 0, \"contactName\" : \"contactName\", \"companyName\" : \"companyName\", \"deliverDate\" : \"2000-01-23\", \"email\" : \"email\", \"status\" : \"confirmed\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * DELETE /order : delete case
     *
     * @param id  (optional)
     * @return Invalid ID supplied (status code 400)
     *         or Order not found (status code 404)
     * @see OrderApi#deleteOrder
     */
    default ResponseEntity<Void> deleteOrder(Long id) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * GET /order : Get a order by ID
     *
     * @param id  (optional)
     * @return Order info (status code 200)
     * @see OrderApi#getOrder
     */
    default ResponseEntity<OrderDTO> getOrder(Long id) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"orderDetails\" : [ { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 }, { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 } ], \"address\" : \"address\", \"orderId\" : 0, \"contactName\" : \"contactName\", \"companyName\" : \"companyName\", \"deliverDate\" : \"2000-01-23\", \"email\" : \"email\", \"status\" : \"confirmed\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * GET /order/page : Get a order page
     *
     * @param deliverDate  (optional)
     * @return Order info (status code 200)
     * @see OrderApi#getOrders
     */
    default ResponseEntity<List<OrderDTO>> getOrders(String deliverDate) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "[ { \"orderDetails\" : [ { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 }, { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 } ], \"address\" : \"address\", \"orderId\" : 0, \"contactName\" : \"contactName\", \"companyName\" : \"companyName\", \"deliverDate\" : \"2000-01-23\", \"email\" : \"email\", \"status\" : \"confirmed\" }, { \"orderDetails\" : [ { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 }, { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 } ], \"address\" : \"address\", \"orderId\" : 0, \"contactName\" : \"contactName\", \"companyName\" : \"companyName\", \"deliverDate\" : \"2000-01-23\", \"email\" : \"email\", \"status\" : \"confirmed\" } ]";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * PUT /order/delivered : Change the order status to delivered
     *
     * @param id  (optional)
     * @return Invalid ID supplied (status code 400)
     *         or Order not found (status code 404)
     * @see OrderApi#orderDelivered
     */
    default ResponseEntity<Void> orderDelivered(Long id) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * PUT /order : update case
     *
     * @param orderDTO  (optional)
     * @return Order info (status code 200)
     * @see OrderApi#updateOrder
     */
    default ResponseEntity<OrderDTO> updateOrder(OrderDTO orderDTO) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"orderDetails\" : [ { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 }, { \"product\" : { \"onHoldQty\" : 1.4658129805029452, \"imgUrl\" : \"imgUrl\", \"defaultPrice\" : 5.962133916683182, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"brand\" : \"brand\" }, \"price\" : 5.962133916683182, \"qty\" : 1.4658129805029452, \"orderDetailId\" : 6 } ], \"address\" : \"address\", \"orderId\" : 0, \"contactName\" : \"contactName\", \"companyName\" : \"companyName\", \"deliverDate\" : \"2000-01-23\", \"email\" : \"email\", \"status\" : \"confirmed\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

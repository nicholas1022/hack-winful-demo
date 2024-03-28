package com.winful.ordsys.api;

import com.winful.ordsys.dto.ProductDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.NativeWebRequest;

import javax.annotation.Generated;
import java.util.List;
import java.util.Optional;

/**
 * A delegate to be called by the {@link ProductApiController}}.
 * Implement this interface with a {@link org.springframework.stereotype.Service} annotated class.
 */
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-03-25T22:50:24.337545-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
public interface ProductApiDelegate {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * PUT /product/cfmOnHoldQty : Confirm on hold quantity
     *
     * @param requestBody  (optional)
     * @return Invalid ID supplied (status code 400)
     *         or Order not found (status code 404)
     * @see ProductApi#confirmOnHoldQty
     */
    default ResponseEntity<Void> confirmOnHoldQty(List<Long> requestBody) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * POST /product : Create a product
     *
     * @param productDTO  (optional)
     * @return product info (status code 200)
     * @see ProductApi#createProduct
     */
    default ResponseEntity<ProductDTO> createProduct(ProductDTO productDTO) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"onHoldQty\" : 1.4658129805029452, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"photoLink\" : \"photoLink\", \"brand\" : \"brand\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * DELETE /product : Delete a product
     *
     * @param id  (optional)
     * @return Invalid ID supplied (status code 400)
     *         or Product not found (status code 404)
     * @see ProductApi#deleteProduct
     */
    default ResponseEntity<Void> deleteProduct(Long id) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * GET /product : Get a product by ID
     *
     * @param id  (optional)
     * @return Product info (status code 200)
     * @see ProductApi#getProduct
     */
    default ResponseEntity<ProductDTO> getProduct(Long id) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"onHoldQty\" : 1.4658129805029452, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"photoLink\" : \"photoLink\", \"brand\" : \"brand\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * GET /product/page : Get a product page
     *
     * @param brand  (optional)
     * @return Product info (status code 200)
     * @see ProductApi#getProducts
     */
    default ResponseEntity<List<ProductDTO>> getProducts(String brand) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "[ { \"onHoldQty\" : 1.4658129805029452, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"photoLink\" : \"photoLink\", \"brand\" : \"brand\" }, { \"onHoldQty\" : 1.4658129805029452, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"photoLink\" : \"photoLink\", \"brand\" : \"brand\" } ]";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

    /**
     * PUT /product : Update a product
     *
     * @param productDTO  (optional)
     * @return Product info (status code 200)
     * @see ProductApi#updateProduct
     */
    default ResponseEntity<ProductDTO> updateProduct(ProductDTO productDTO) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"onHoldQty\" : 1.4658129805029452, \"qty\" : 6.027456183070403, \"plu\" : 0, \"name\" : \"name\", \"photoLink\" : \"photoLink\", \"brand\" : \"brand\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

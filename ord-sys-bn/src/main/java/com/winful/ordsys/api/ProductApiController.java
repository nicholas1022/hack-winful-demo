package com.winful.ordsys.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Generated;
import java.util.Optional;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-03-25T22:50:24.337545-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
@Controller
@RequestMapping("${openapi.hackathonWinful.base-path:/api}")
public class ProductApiController implements ProductApi {

    private final ProductApiDelegate delegate;

    public ProductApiController(@Autowired(required = false) ProductApiDelegate delegate) {
        this.delegate = Optional.ofNullable(delegate).orElse(new ProductApiDelegate() {});
    }

    @Override
    public ProductApiDelegate getDelegate() {
        return delegate;
    }

}

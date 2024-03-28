package com.winful.ordsys.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Generated;
import java.util.Optional;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-03-25T14:48:21.210539-04:00[America/Toronto]", comments = "Generator version: 7.4.0")
@Controller
@RequestMapping("${openapi.hackathonWinful.base-path:/api}")
public class OrderApiController implements OrderApi {

    private final OrderApiDelegate delegate;

    public OrderApiController(@Autowired(required = false) OrderApiDelegate delegate) {
        this.delegate = Optional.ofNullable(delegate).orElse(new OrderApiDelegate() {});
    }

    @Override
    public OrderApiDelegate getDelegate() {
        return delegate;
    }

}

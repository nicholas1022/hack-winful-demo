package com.winful.ordsys.model;

import jakarta.persistence.Id;

public class CoreModel extends AbstractAuditable{

    @Id
    private Long id;

}

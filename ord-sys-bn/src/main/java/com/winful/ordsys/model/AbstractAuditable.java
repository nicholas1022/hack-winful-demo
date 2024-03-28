package com.winful.ordsys.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;

public abstract class AbstractAuditable {

    @CreatedDate
    private Date createdDate;

    @LastModifiedDate
    private Date lastModifiedDated;

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getLastModifiedDated() {
        return lastModifiedDated;
    }

    public void setLastModifiedDated(Date lastModifiedDated) {
        this.lastModifiedDated = lastModifiedDated;
    }
}

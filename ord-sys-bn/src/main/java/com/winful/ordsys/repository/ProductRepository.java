package com.winful.ordsys.repository;

import com.winful.ordsys.model.Product;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByBrand(String brand, Sort name);

    @Query(value = "select count(*) from Product p1_0 where p1_0.plu = ?1 AND (p1_0.qty - p1_0.onHoldQty) >= ?2")
    Long countByIdAndAvailQty(Long id, Double qty);

    @Modifying
    @Query(value = "update Product p1_0 set p1_0.onHoldQty = p1_0.onHoldQty + ?2 where p1_0.plu = ?1")
    void addOnHoldQty(Long id, Double qty);

    @Modifying
    @Query(value = "update Product p1_0 set p1_0.qty = p1_0.qty - p1_0.onHoldQty, p1_0.onHoldQty = 0 where p1_0.plu = ?1")
    void confirmOnHoldQty(Long id);
}

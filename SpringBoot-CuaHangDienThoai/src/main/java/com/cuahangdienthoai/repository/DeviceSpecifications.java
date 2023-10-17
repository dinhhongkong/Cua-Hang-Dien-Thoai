package com.cuahangdienthoai.repository;

import com.cuahangdienthoai.entity.Device;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.jpa.domain.Specification;
@Data
@AllArgsConstructor
public class DeviceSpecifications implements Specification<Device> {
    private String name;
    private Double minPrice;
    private Double maxPrice;
    private Long brand;


    @Override
    public Predicate toPredicate(Root<Device> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        Predicate predicate = criteriaBuilder.conjunction();

        if (name != null && !name.isEmpty()) {
            predicate = criteriaBuilder.and(predicate, criteriaBuilder.like(root.get("deviceName"), "%" + name + "%"));
        }

        if (minPrice != null) {
            predicate = criteriaBuilder.and(predicate, criteriaBuilder.greaterThanOrEqualTo(root.get("gia"), minPrice));
        }

        if (maxPrice != null) {
            predicate = criteriaBuilder.and(predicate, criteriaBuilder.lessThanOrEqualTo(root.get("gia"), maxPrice));
        }

        if (brand != null) {
            predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("brand").get("id"), brand));
        }


        return predicate;
    }
}

package com.cuahangdienthoai.repository;

import com.cuahangdienthoai.entity.Brand;
import com.cuahangdienthoai.entity.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BrandRepository extends JpaRepository<Brand,Long> {
    @Query("SELECT d FROM Device d WHERE d.brand.brandName = :brandName")
    List<Device> findDevicesBrandName(@Param("brandName") String brandName);
}

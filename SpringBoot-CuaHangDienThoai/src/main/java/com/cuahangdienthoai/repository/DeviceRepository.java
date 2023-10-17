package com.cuahangdienthoai.repository;

import com.cuahangdienthoai.entity.Device;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface DeviceRepository extends JpaRepository<Device, Long> , JpaSpecificationExecutor<Device> {

    Page<Device> findAll( Pageable pageable);
    List<Device> findByGiaBetween(double giaBatDau, double giaKetThuc, Pageable pageable);
    Device findDeviceByDeviceName(String name);
    Device findByDeviceName(String name);
    Page<Device> findByDeviceNameContaining(String keyword,Pageable pageable);

    Page<Device> findAll(Specification<Device> spec, Pageable pageable);

}

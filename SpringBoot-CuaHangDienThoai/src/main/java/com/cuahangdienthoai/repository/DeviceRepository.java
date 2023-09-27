package com.cuahangdienthoai.repository;

import com.cuahangdienthoai.entity.Device;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeviceRepository extends JpaRepository<Device, Long> {
    Page<Device> findAll(Pageable pageable);
    List<Device> findByGiaBetween(double giaBatDau, double giaKetThuc, Pageable pageable);
    Device findDeviceByDeviceName(String name);
    Device findByDeviceName(String name);
}

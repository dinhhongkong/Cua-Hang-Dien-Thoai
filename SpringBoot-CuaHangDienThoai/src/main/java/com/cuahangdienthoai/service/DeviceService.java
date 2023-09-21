package com.cuahangdienthoai.service;


import com.cuahangdienthoai.entity.Device;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface DeviceService  {
    List<Device> findAll();

    List<Device> findGiaBetween(double giaBatDau, double giaKetThuc, Pageable pageable);
    Device findById(Long deviceId);
    Device findByDeviceName(String deviceName);
    void deleteById(long deviceId);
    void save(Device device);
}

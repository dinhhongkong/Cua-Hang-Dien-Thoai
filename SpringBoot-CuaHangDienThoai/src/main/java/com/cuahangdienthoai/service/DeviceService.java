package com.cuahangdienthoai.service;


import com.cuahangdienthoai.dto.DeviceQuantityDTO;
import com.cuahangdienthoai.dto.DevicePayDTO;
import com.cuahangdienthoai.entity.Device;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.List;

public interface DeviceService  {
    Page<Device> findAll(Pageable pageable);

    List<Device> findGiaBetween(double giaBatDau, double giaKetThuc, Pageable pageable);
    Device findById(Long deviceId);
    Device findByDeviceName(String deviceName);
    void deleteById(long deviceId);
    void save(Device device);

    Page<Device> findByNameContaining(String keyword, Pageable pageable);

    ArrayList<DevicePayDTO> prepareDeviceForPayment(List<DeviceQuantityDTO> data);

    Page<Device> searchProducts(String name, Double minPrice, Double maxPrice, Long brand, Pageable pageable);

    List<Device> findAllDevice();

    ArrayList<Device> RecommendOfDevices(Long deviceId);

}

package com.cuahangdienthoai.service;


import com.cuahangdienthoai.dto.DeviceJsonDTO;
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

    ArrayList<DevicePayDTO> prepareDeviceForPayment(List<DeviceJsonDTO> data);

}

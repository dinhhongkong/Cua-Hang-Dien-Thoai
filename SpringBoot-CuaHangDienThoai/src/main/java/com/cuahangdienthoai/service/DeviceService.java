package com.cuahangdienthoai.service;


import com.cuahangdienthoai.entity.Device;

import java.util.List;

public interface DeviceService  {
    List<Device> findAll();
    Device findById(Long deviceId);
    Device findByDeviceName(String deviceName);
    void deleteById(Long deviceId);
    void save(Device device);
}

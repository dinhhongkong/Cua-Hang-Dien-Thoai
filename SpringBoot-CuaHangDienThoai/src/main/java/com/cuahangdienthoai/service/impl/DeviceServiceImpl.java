package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.repository.DeviceRepository;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DeviceServiceImpl implements DeviceService {
    private DeviceRepository deviceRepository;

    @Autowired
    public void setDeviceRepository(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    @Override
    public List<Device> findAll() {
        return deviceRepository.findAll();
    }

    @Override
    public Device findById(Long deviceId) {
        return null;
    }

    @Override
    public Device findByDeviceName(String deviceName) {
        return null;
    }

    @Override
    public void deleteById(Long deviceId) {

    }

    @Override
    public void save(Device device) {

    }
}

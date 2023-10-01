package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.repository.DeviceRepository;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeviceServiceImpl implements DeviceService {
    private DeviceRepository deviceRepository;

    @Autowired
    public void setDeviceRepository(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    @Override
    public Page<Device> findAll(Pageable pageable) {
        return deviceRepository.findAll(pageable);
    }


    @Override
    public List<Device> findGiaBetween(double giaBatDau, double giaKetThuc, Pageable pageable) {
        return deviceRepository.findByGiaBetween(giaBatDau,giaKetThuc,pageable);
    }

    @Override
    public Device findById(Long deviceId) {
        Optional<Device> result = deviceRepository.findById(deviceId);
        Device device = null;
        if (result.isPresent()) {
            device = result.get();
        }
        else {
            throw new RuntimeException("Không tìm thấy device id");
        }

        return device;
    }

    @Override
    public Device findByDeviceName(String deviceName) {
        Device result = deviceRepository.findDeviceByDeviceName(deviceName);
        if (result == null) {
            throw new RuntimeException("Không tìm thấy device id");
        }
        return result;
    }

    @Override
    public void deleteById(long deviceId) {

    }

    @Override
    public void save(Device device) {
        deviceRepository.save(device);
    }
}

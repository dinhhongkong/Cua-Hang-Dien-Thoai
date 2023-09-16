package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DeviceController {
    private DeviceService deviceService;

    @Autowired
    public void setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping("/device")
    public List<Device> getAllDevice() {
        return deviceService.findAll();
    }
}

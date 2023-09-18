package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DeviceController {
    private DeviceService deviceService;

    @Autowired
    public void setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping("/")
    public String home() {
        return "index";
    }



//    @GetMapping("/device")
//    public List<Device> getAllDevice() {
//        return deviceService.findAll();
//    }
}

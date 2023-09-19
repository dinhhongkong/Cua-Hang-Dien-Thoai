package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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
    public String home(Authentication authentication) {
        CustomUserDetails user = (CustomUserDetails) authentication.getPrincipal();
        if (user != null) {
            System.out.println( "đây là user id " + user.getUser().getId());
        }
        else {
            System.out.println("chua dang nhap");
        }

        return "index";
    }

    @GetMapping("/device")
    public String device() {
        return "device-details";
    }



//    @GetMapping("/device")
//    public List<Device> getAllDevice() {
//        return deviceService.findAll();
//    }
}

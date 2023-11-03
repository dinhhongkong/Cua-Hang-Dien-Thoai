package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.dto.DeviceQuantityDTO;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
    private VNPayService vnPayService;
    private DeviceService deviceService;

    @Autowired
    public void setVnPayService(VNPayService vnPayService) {
        this.vnPayService = vnPayService;
    }
    @Autowired
    public void setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }



    public int getTotal(List<DeviceQuantityDTO> devices) {
        int total = 0;
        for (DeviceQuantityDTO i : devices) {
            Device device =  deviceService.findById( i.getDeviceId());
            total +=  device.getGia();
        }
        return total;
    }

//    public String createOderByVNPay(List<DeviceQuantityDTO> devices, String baseUrl, String username) {
//        int total = getTotal(devices);
//        String contentBilling = username + " thanh toan don hang 456";
//
//        return vnPayService.createOrder(total,contentBilling,baseUrl);
//    }



}

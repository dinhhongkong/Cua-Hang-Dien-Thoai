package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.dto.DeviceJsonDTO;
import com.cuahangdienthoai.dto.DevicePayDTO;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.service.DeviceService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class DeviceController {
    private DeviceService deviceService;

    @Autowired
    public void setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping("/")
    public String home(Model model) {
        List<Device> knockoutDevices = deviceService.findGiaBetween(2000000, 4000000, PageRequest.of(0, 8));
        List<Device> dealDevices = deviceService.findGiaBetween(2000000, 4000000, PageRequest.of(2, 20));
        model.addAttribute("knockoutDevices", knockoutDevices);
        model.addAttribute("dealDevices", dealDevices);
        return "index";
    }

    @GetMapping("/{deviceName}/info")
    public String info(@PathVariable String deviceName, Model model) {
        String name = deviceName.replace("-", " ");
        Device device = deviceService.findByDeviceName(name);
        model.addAttribute("device", device);
        return "device-info";
    }


    @GetMapping("/devices")
    public String allDevices(Model model) {
        Page<Device> device = deviceService.findAll(PageRequest.of(0, 8));

        model.addAttribute("device", device);
        return "devices";
    }

    //    @PostMapping("/payment")
//    public String createPaymentInfo(@RequestParam List<DeviceJsonDTO> requestData, Model model) {
//        ArrayList<DevicePayDTO> listDevice = deviceService.prepareDeviceForPayment(requestData);
//        model.addAttribute("devices", listDevice);
//        return "redirect:payment-info";
//    }
    @PostMapping("/payment-info")
    public String createPaymentInfo(@RequestBody List<DeviceJsonDTO> requestData, HttpSession session) {
        session.setAttribute("DevicesPayment",requestData );
        return "redirect:payment-info";
    }

    @GetMapping("/payment-info")
    public String createPaymentInfo(HttpSession session, Model model) {
        List<DeviceJsonDTO> myData = (List<DeviceJsonDTO>) session.getAttribute("DevicesPayment");
        ArrayList<DevicePayDTO> devices = deviceService.prepareDeviceForPayment(myData);
        model.addAttribute("devices",devices );
        return "payment-info";
    }


}

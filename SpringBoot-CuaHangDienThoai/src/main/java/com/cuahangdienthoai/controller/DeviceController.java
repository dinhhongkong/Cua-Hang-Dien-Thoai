package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.dto.DeviceQuantityDTO;
import com.cuahangdienthoai.dto.DevicePayDTO;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.service.DeviceService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
    public String allDevices(@RequestParam(defaultValue = "1") int page, Model model) {
        Page<Device> devices = deviceService.findAll(PageRequest.of(page -1, 15));
        model.addAttribute("device", devices);
        return "devices";
    }

    @GetMapping("/search")
    public String search(@RequestParam(name = "keyword") String keyword,
                         @RequestParam(defaultValue = "1") int page,
                         Model model) {
        Page<Device> devices;
        Pageable pageable = PageRequest.of(page-1, 15);
        if ( !keyword.isEmpty() || keyword != null) {
            devices = deviceService.findByNameContaining(keyword, pageable);
        }
        else {
            devices = deviceService.findAll( pageable);
        }
        model.addAttribute("device", devices);
        return "devices";
    }


    @GetMapping("/filter")
    public String filter(@RequestParam(required = false) String keyword,
                         @RequestParam(required = false) Double minPrice,
                         @RequestParam(required = false) Double maxPrice,
                         @RequestParam(required = false) Long brandId,
                         @RequestParam(defaultValue = "1") int page,
                         Model model) {
        Page<Device> devices;
        Pageable pageable = PageRequest.of(page-1, 15);
        if(brandId == null) {
            System.out.println("kong");
        }
        System.out.println(brandId);


        devices = deviceService.searchProducts(keyword, minPrice, maxPrice, brandId, pageable);
        model.addAttribute("device", devices);
        return "devices";
    }

    //    @PostMapping("/payment")
//    public String createPaymentInfo(@RequestParam List<DeviceJsonDTO> requestData, Model model) {
//        ArrayList<DevicePayDTO> listDevice = deviceService.prepareDeviceForPayment(requestData);
//        model.addAttribute("devices", listDevice);
//        return "redirect:payment-info";
//    }
    @PostMapping("/payment-info")
    public String createPaymentInfo(@RequestBody List<DeviceQuantityDTO> requestData, HttpSession session) {
        session.setAttribute("DevicesPayment",requestData );
        return "redirect:payment-info";
    }

    @GetMapping("/payment-info")
    public String createPaymentInfo(HttpSession session, Model model) {
        List<DeviceQuantityDTO> myData = (List<DeviceQuantityDTO>) session.getAttribute("DevicesPayment");
        ArrayList<DevicePayDTO> devices = deviceService.prepareDeviceForPayment(myData);
        model.addAttribute("devices",devices );
        return "payment-info";
    }

//    @GetMapping("/download")
//    public String download() throws InterruptedException {
//        List<Device> devices = deviceService.findAllDevice();
//        for ( Device device : devices) {
//            try(InputStream in = new URL(device.getPicture()).openStream()){
//                Files.copy(in, Paths.get("D:/Web-Ban-Dien-Thoai/" + device.getId() + ".jpg"));
//            } catch (MalformedURLException e) {
//                throw new RuntimeException(e);
//            } catch (IOException e) {
//                throw new RuntimeException(e);
//            }
//
//            Thread.sleep(500);
//        }
//        return "login";
//    }



//    @GetMapping("/update")
//    public String update() {
//        Random generator = new Random();
//        for (int i = 8522; i <= 10633; i++) {
//            Device device = deviceService.findById(8522L);
//            int value = generator.nextInt(350) + 22 ;
//            value = value * 100000;
//            device.setGia((double)value);
//            deviceService.save(device);
//        }
//        return "login";
//    }
}

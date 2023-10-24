package com.cuahangdienthoai.controller;
import org.springframework.core.io.Resource;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.service.BrandService;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Controller
public class DeviceController {
    private DeviceService deviceService;
    private BrandService brandService;

    @Autowired
    private ResourceLoader resourceLoader;
    public DeviceController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }


    @Autowired
    public void setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @Autowired
    public void setBrandService(BrandService brandService){
        this.brandService = brandService;
    }

    @GetMapping("/")
    public String home(Model model) {
        List<Device> knockoutDevices = deviceService.findGiaBetween(2000000,4000000, PageRequest.of(0, 8));
        List<Device> dealDevices = deviceService.findGiaBetween(2000000,4000000, PageRequest.of(2, 20));
        model.addAttribute("knockoutDevices", knockoutDevices);
        model.addAttribute("dealDevices", dealDevices);
        return "index";
    }

    @GetMapping("/{deviceName}/info")
    public String info(@PathVariable String deviceName, Model model) {
        String name = deviceName.replace("-"," ");
        Device device = deviceService.findByDeviceName(name);
        model.addAttribute("device", device);
        return "device-info";
    }


    @GetMapping("/devices")
    public String allDevices(Model model) {
        Page<Device> device = deviceService.findAll( PageRequest.of(0, 8));

        model.addAttribute("device", device);
        return "devices";
    }

    @GetMapping("/devices_page")
    public ResponseEntity<Page<Device>> allDevices(@RequestParam(value = "page", defaultValue = "0") int page,
                                                   @RequestParam(value = "size", defaultValue = "5") int size) {
        Page<Device> devicePage = deviceService.findAll(PageRequest.of(page, size));

        // Kiểm tra xem trang có dữ liệu không
        if (devicePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(devicePage, HttpStatus.OK);
    }


    @PostMapping("/Admin/addDevices")
    public ResponseEntity<Device> themDienThoai(@RequestParam Long brandId, @RequestParam String deviceName, @RequestParam(name = "releasedAt", required = false ) String releasedAt,
                                                @RequestParam(name = "body", required = false ) String body,
                                                @RequestPart(name = "file", required = false ) MultipartFile file,
                                                @RequestParam(name = "os", required = false ) String os,
                                                @RequestParam(name = "storage", required = false ) String storage,
                                                @RequestParam(name = "displaySize", required = false ) String displaySize,
                                                @RequestParam(name = "displayResolution", required = false ) String displayResolution,
                                                @RequestParam(name = "cameraPixels", required = false ) String cameraPixels,
                                                @RequestParam(name = "videoPixels", required = false ) String videoPixels,
                                                @RequestParam(name = "ram", required = false ) String ram,
                                                @RequestParam(name = "chipset", required = false ) String chipset,
                                                @RequestParam(name = "batterySize", required = false ) String batterySize,
                                                @RequestParam(name = "batteryType", required = false ) String batteryType,
                                                @RequestParam(name = "specifications", required = false ) String specifications,
                                                @RequestParam(name = "gia", required = false ) Double gia
                                                ) throws IOException {
        System.out.println("thành công1");
        Device device = new Device();
        device.setBrand(brandService.findById(brandId));
        device.setDeviceName(deviceName);
        device.setReleaseAt(releasedAt);
        device.setBody(body);
        System.out.println(resourceLoader);
        Resource staticResource = resourceLoader.getResource("classpath:static/img");
        System.out.println(file);
        if (!file.isEmpty()) {
            // Lưu ảnh vào máy chủ
            byte[] bytes = file.getBytes();
            Path path = Paths.get(staticResource.getURI()).resolve(file.getOriginalFilename());
            Files.write(path, bytes);
            device.setPicture(path.toString());
            System.out.println("thành công2");
        } else {
            System.out.println("có lỗi");
        }
        device.setOs(os);
        device.setStorage(storage);
        device.setDisplaySize(displaySize);
        device.setDisplayResolution(displayResolution);
        device.setCameraPixels(cameraPixels);
        device.setVideoPixels(videoPixels);
        device.setRam(ram);
        device.setChipset(chipset);
        device.setBatterySize(batterySize);
        device.setBatteryType(batteryType);
        device.setSpecifications(specifications);
        device.setGia(gia);
        deviceService.save(device);
        return ResponseEntity.ok(device);
    }



}

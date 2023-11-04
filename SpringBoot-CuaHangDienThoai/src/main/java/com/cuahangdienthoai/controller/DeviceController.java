package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.dto.DevicePayDTO;
import com.cuahangdienthoai.dto.DeviceQuantityDTO;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.service.BrandService;
import com.cuahangdienthoai.service.DeviceService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.sql.Date;

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
        model.addAttribute("recommendedDevice", deviceService.RecommendOfDevices(device.getId()));
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

    @GetMapping("/devices_page")
    public ResponseEntity<Page<Device>> allDevices(@RequestParam(value = "page", defaultValue = "0") int page,
                                                   @RequestParam(value = "size", defaultValue = "5") int size) {
        Page<Device> devicePage = deviceService.findAll(PageRequest.of(page, size));
        for(Device i : devicePage){
            Optional<Double> gia = Optional.ofNullable(i.getGia());
            i.setGia(gia.orElse(0D));
        }

        if (devicePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(devicePage, HttpStatus.OK);
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
        System.out.println("ở post" +requestData);
        return "redirect:payment-info";
    }

    @GetMapping("/payment-info")
    public String createPaymentInfo(HttpSession session, Model model) {
        List<DeviceQuantityDTO> myData = (List<DeviceQuantityDTO>) session.getAttribute("DevicesPayment");
        ArrayList<DevicePayDTO> devices = deviceService.prepareDeviceForPayment(myData);
        System.out.println("ở get: " + myData);
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



    @PostMapping("/Admin/addDevices")
    public ResponseEntity<Device> themDienThoai(@RequestParam Long productId ,@RequestParam Long brandId, @RequestParam String deviceName, @RequestParam(name = "releasedAt", required = false ) String releasedAt,
                                                @RequestParam(name = "body", required = false ) String body,
                                                @RequestPart(name = "file", required = false) MultipartFile file,
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
                                                @RequestParam(name = "gia", required = false ) Double gia,
                                                @RequestParam(name = "soLuong", required = false) Long soLuong
                                                ) throws IOException {
        System.out.println("thành công1");
        Device device = deviceService.findById(productId);
        device.setBrand(brandService.findById(brandId));
        device.setDeviceName(deviceName);
        device.setReleaseAt(releasedAt);
        device.setBody(body);
        System.out.println(resourceLoader);
        Resource staticResource = resourceLoader.getResource("classpath:static/img");
        if (file != null) {
            // Lưu ảnh vào máy chủ
            byte[] bytes = file.getBytes();
            Path path = Paths.get(staticResource.getURI()).resolve(file.getOriginalFilename());
            Files.write(path, bytes);
            device.setPicture(path.toString());
            System.out.println("thành công2");
        } else {
            System.out.println("ảnh vẫn giữ nguyên");
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
        device.setSoLuong(soLuong);
        deviceService.save(device);
        return ResponseEntity.ok(device);
    }

    @PostMapping("/Admin/updateDevices")
    public ResponseEntity<Device> updateDienThaoi(@RequestParam Long brandId, @RequestParam String deviceName, @RequestParam(name = "releasedAt", required = false ) String releasedAt,
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
            System.out.println("ảnh vẫn dữ nguyên");
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

    @GetMapping("/device/findbyid")
    public ResponseEntity<Device> findById(@RequestParam Long id, Authentication authentication){
        Device device = deviceService.findById(id);
        return ResponseEntity.ok(device);
    }

    @PostMapping("/Admin/device/stop")
    public  ResponseEntity<String> dungKinhDoanh(@RequestParam Long productId, Authentication authentication){
        Device device = deviceService.findById(productId);
        Date currentDate = new Date(System.currentTimeMillis());
        device.setDeletedAt(currentDate);
        deviceService.save(device);
        return ResponseEntity.ok("success");
    }
}

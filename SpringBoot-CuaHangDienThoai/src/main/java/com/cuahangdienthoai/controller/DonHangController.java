package com.cuahangdienthoai.controller;
import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.UserHistory;
import com.cuahangdienthoai.entity.chitietdonhang.ChiTietDonHang;
import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.service.DeviceService;
import com.cuahangdienthoai.service.DonHangService;
import com.cuahangdienthoai.service.UserHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DonHangController {
    private DonHangService donHangService;

    private UserHistoryService userHistoryService;
    private DeviceService deviceService;

    @Autowired
    public void setDonHangService(DonHangService donHangService){this.donHangService = donHangService;}

    @Autowired
    public  void setUserHistoryService(UserHistoryService userHistoryService){
        this.userHistoryService = userHistoryService;
    }

    @Autowired
    public void setDeviceService(DeviceService deviceService){this.deviceService = deviceService;}
    @PostMapping("/DonHang")
    public ResponseEntity<DonHang> createDonHang(@RequestBody DonHang newDonHang) {
        donHangService.save(newDonHang);
        return new ResponseEntity<>(newDonHang,HttpStatus.CREATED);
    }

    @PostMapping("/Admin/duyet")
    public ResponseEntity<String> duyet(@RequestParam Long donHangId, Authentication authentication){
        DonHang donHang = donHangService.findDonHangById(donHangId);
        donHang.setTrangThai(1);
        donHangService.save(donHang);
        return ResponseEntity.ok("Duyệt thành công");
    }

    @PostMapping("/Admin/huy")
    public ResponseEntity<String> huy(@RequestParam Long donHangId, Authentication authentication){
        DonHang donHang = donHangService.findDonHangById(donHangId);
        donHang.setTrangThai(3);
        donHangService.save(donHang);
        return ResponseEntity.ok("Hủy thành công");
    }

    @PostMapping("/Admin/donhang")
    public ResponseEntity<DonHang> findById(@RequestParam long donHangId, Authentication authentication){
        DonHang donHang = donHangService.findDonHangById(donHangId);
        return  ResponseEntity.ok(donHang);
    }

    @PostMapping("/Admin/donhang/hoanthanh")
    public ResponseEntity<String> hoanThanhDonHang(@RequestParam long donHangId){

        DonHang donHang = donHangService.findDonHangById(donHangId);
        donHang.setTrangThai(2);
        List<ChiTietDonHang> listCTDH = donHang.getListCTDonHang();
        for(ChiTietDonHang e: listCTDH ){
            Device device = e.getDevice();
            device.setSoLuong(device.getSoLuong() - e.getSoLuong());
            UserHistory userHistory = new UserHistory();
            userHistory.setUser_id(donHang.getUser().getId());
            userHistory.setItem_id(device.getId());
            userHistory.setRating(1L);
            userHistory.setBuy(true);
            userHistoryService.save(userHistory);
            deviceService.save(device);
        }

        donHangService.save(donHang);
        return ResponseEntity.ok("Đơn đã hoàn thành");
    }

}

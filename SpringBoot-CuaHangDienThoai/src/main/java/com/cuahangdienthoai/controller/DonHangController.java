package com.cuahangdienthoai.controller;
import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.service.DonHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DonHangController {
    private DonHangService donHangService;
    @Autowired
    public void setDonHangService(DonHangService donHangService){this.donHangService = donHangService;}
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
}

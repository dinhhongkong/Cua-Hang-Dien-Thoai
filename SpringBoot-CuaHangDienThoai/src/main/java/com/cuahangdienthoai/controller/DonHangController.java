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
    public ResponseEntity<DonHang> createBrand(@RequestBody DonHang newDonHang) {
        donHangService.save(newDonHang);
        return new ResponseEntity<>(newDonHang,HttpStatus.CREATED);
    }

    @PostMapping("/Admin/duyet")
    public ResponseEntity<String> duyet(@RequestParam Long donHangId, Authentication authentication){
        System.out.println(donHangId);
        DonHang donHang = donHangService.getDonHangByid(donHangId);
        donHang.setTrangThai(1);
        return ResponseEntity.ok("Duyệt thành công");
    }

}

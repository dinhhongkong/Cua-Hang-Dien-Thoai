package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.entity.giohang.GioHang;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeviceRestController {

//    @PostMapping("/add-to-cart")
//    public ResponseEntity<String> addToCart(@RequestParam Long productId, Authentication authentication) {
//        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
//        GioHang gioHang = new  GioHang();
//
//
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi khi cập nhật số lượng sản phẩm.");
//    }

}

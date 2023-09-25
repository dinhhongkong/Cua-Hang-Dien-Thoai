package com.cuahangdienthoai.controller;


import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;
import com.cuahangdienthoai.service.GioHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
public class GioHangController {
    private GioHangService gioHangService;
    @Autowired
    public void setGioHangService(GioHangService gioHangService) {
        this.gioHangService = gioHangService;
    }

    @GetMapping("/cart")
    public String cart() {
        return "cart";
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<String> themVaoGioHang(@RequestParam Long productId, Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        gioHangService.save(productId,userDetails.getUser().getId());
        return ResponseEntity.ok("Sản phẩm đã được thêm vào giỏ hàng");
    }


}    

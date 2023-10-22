package com.cuahangdienthoai.controller;


import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.service.GioHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class GioHangController {
    private GioHangService gioHangService;
    @Autowired
    public void setGioHangService(GioHangService gioHangService) {
        this.gioHangService = gioHangService;
    }

    @GetMapping("/cart")
    public String cart(Model model, Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        List<GioHang> gioHang = gioHangService.findByUserId(userDetails.getUser().getId());
        model.addAttribute("giohang",gioHang);
        return "cart";
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<String> themVaoGioHang(@RequestParam Long productId, Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        System.out.println("thong tin user "+userDetails);
        if (userDetails == null) {
            return new ResponseEntity<>("Chưa đăng nhập", HttpStatus.UNAUTHORIZED);
        }
        gioHangService.saveByDeviceIdAndUserId(productId,userDetails.getUser().getId());
        return ResponseEntity.ok("Sản phẩm đã được thêm vào giỏ hàng");
    }

    @PutMapping("/cart")
    public ResponseEntity<String> suaGioHang(@RequestParam Long productId, @RequestParam String cal, Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        gioHangService.updateQuantity(productId,userDetails.getUser().getId(), cal);
        return ResponseEntity.ok("Sản phẩm đã cập nhật giỏ hàng");
    }

    @DeleteMapping("/cart")
    @Transactional
    public ResponseEntity<String> xoaGioHang(@RequestParam Long productId, Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        gioHangService.deleteCart(productId,userDetails.getUser().getId());
        return ResponseEntity.ok("Xoá giỏ hàng thành công");
    }


}    

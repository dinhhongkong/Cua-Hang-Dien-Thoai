package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.service.DonHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class OrderTrackingController {

    private DonHangService donHangService;

    @Autowired
    public void setDonHangService(DonHangService donHangService) {
        this.donHangService = donHangService;
    }

    @GetMapping("/order-tracking")
    public String checkOrder(Model model, Authentication authentication){
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        List<DonHang> donHang = donHangService.findDonHangByUserId(userDetails.getUser().getId());
        model.addAttribute("listDonHang", donHang);
        return "order-tracking";
    }

}

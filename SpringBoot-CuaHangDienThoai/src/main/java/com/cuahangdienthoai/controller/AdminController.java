package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.repository.DonHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class AdminController {
    @Autowired
    private DonHangRepository donHangRepository;
    @GetMapping("/Admin")
    public String Admin(){
        return "AdminPage";
    }
    @GetMapping("/Admin/order")
    public  String AdminOrder(Model model){
        model.addAttribute("title", "order");
        List<DonHang> listDonHang = donHangRepository.findAll();
        model.addAttribute("listDonHang",listDonHang);
        return "AdminPage";
    }
}

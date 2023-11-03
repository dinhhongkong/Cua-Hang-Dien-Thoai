package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.repository.DonHangRepository;
import com.cuahangdienthoai.service.DeviceService;
import com.cuahangdienthoai.service.DonHangService;
import com.cuahangdienthoai.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class AdminController {
    @Autowired
    private DonHangService donHangService;
    @Autowired
    private UserService userService;
    @Autowired
    private DeviceService deviceService;
    @GetMapping("/Admin")
    public String admin(Model model){
        List<User> listAdmin = userService.findAllByRole("admin");
        model.addAttribute("listAdmin", listAdmin);
        return "AdminPage";
    }
    @GetMapping("/Admin/order")
    public  String adminOrder(Model model){
        model.addAttribute("title", "order");
        List<DonHang> listDonHang = donHangService.findAll();
        model.addAttribute("listDonHang",listDonHang);
        return "AdminPage";
    }

    @GetMapping("Admin/devices")
    public  String adminDevices(Model model){
        model.addAttribute("title", "devices");
        Page<Device> listDevice = deviceService.findAll(PageRequest.of(0,5));
        model.addAttribute("listDevice",listDevice);
        return "AdminPage";
    }
    @GetMapping("Admin/users")
    public String adminUsers(Model model){
        model.addAttribute("title", "users");
        List<User> listUser = userService.findAllByRole("user");
        model.addAttribute("listUser",listUser);
        return "AdminPage";
    }
}

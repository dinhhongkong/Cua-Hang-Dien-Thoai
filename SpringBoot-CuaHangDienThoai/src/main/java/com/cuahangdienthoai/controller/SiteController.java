package com.cuahangdienthoai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SiteController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/signin")
    public String signin() {
        return "signin";
    }

//    @GetMapping("/payment")
//    public String pay() {
//        return "payment-info";
//    }

}

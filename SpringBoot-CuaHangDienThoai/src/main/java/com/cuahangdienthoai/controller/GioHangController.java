package com.cuahangdienthoai.controller;


import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
public class GioHangController {

    @GetMapping("/cart")
    public String cart() {
        return "cart";

    }

}

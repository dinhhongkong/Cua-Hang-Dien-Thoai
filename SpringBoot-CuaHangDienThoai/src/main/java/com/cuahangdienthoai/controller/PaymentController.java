package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.dto.PaymentInfoDTO;
import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.service.impl.PaymentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class PaymentController {
    /*
    * paymentInfo = 0 : thanh toán sau
    * paymentInfo = 1: thanh toán bằng vnpay
    * */

    private PaymentService paymentService;

    @Autowired
    public void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/submitOrder")
    public ResponseEntity<String> submidOrder(
            @RequestBody PaymentInfoDTO paymentInfo,
            HttpServletRequest request, Authentication authentication){

        String baseUrl = "";
        if (paymentInfo.getPaymentMethod() == 1) {
            baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        }

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        return ResponseEntity.ok("hello");
    }
}

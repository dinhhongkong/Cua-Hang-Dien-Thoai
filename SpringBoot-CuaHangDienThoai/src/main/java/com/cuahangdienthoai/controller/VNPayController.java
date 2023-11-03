package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.dto.PaymentInfoDTO;
import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.service.impl.VNPayService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.text.DecimalFormat;

@Controller
public class VNPayController {

    private VNPayService vnPayService;

    @Autowired
    public void setVnPayService(VNPayService vnPayService) {
        this.vnPayService = vnPayService;
    }

    @PostMapping("/submitOrderVNPay")
    public ResponseEntity<String> submidOrder(
                              @RequestBody PaymentInfoDTO paymentInfo,
                              HttpServletRequest request, Authentication authentication){

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String vnpayUrl = vnPayService.handleOrderInfo(userDetails.getUser(), paymentInfo,baseUrl );
        return ResponseEntity.ok(vnpayUrl);
    }


    @GetMapping("/vnpay-payment")
    public String GetMapping(HttpServletRequest request, Model model, Authentication authentication){
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        DecimalFormat decimalFormat = new DecimalFormat("###,###");

        String orderInfo = request.getParameter("vnp_OrderInfo");
        String paymentTime = request.getParameter("vnp_PayDate");
        String transactionId = request.getParameter("vnp_TransactionNo");
        String totalPrice = decimalFormat.format(Long.parseLong(request.getParameter("vnp_Amount")) / 100);
        int paymentStatus =vnPayService.orderReturn(request,orderInfo,userDetails.getUser().getId());


        model.addAttribute("orderId", orderInfo);
        model.addAttribute("totalPrice", totalPrice);
        model.addAttribute("paymentTime", paymentTime);
        model.addAttribute("transactionId", transactionId);
        return paymentStatus == 1 ? "ordersuccess" : "orderfail";
    }
}

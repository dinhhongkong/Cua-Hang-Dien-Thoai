package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class RecommendController {
    private RecommendationService  recommendationService;

    @Autowired
    public void setRecommendationService(RecommendationService recommendationService){
        this.recommendationService = recommendationService;
    }
    @GetMapping("/recommendofdevices")
    public ResponseEntity<String> recommendOfDevices(@RequestParam int productId){
        String result = recommendationService.getRecommendOfDevices(productId);
        System.out.println(result);
        return ResponseEntity.ok(result);
    }
}

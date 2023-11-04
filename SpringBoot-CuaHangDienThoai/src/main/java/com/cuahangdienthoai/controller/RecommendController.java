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
//    @GetMapping("/recommendofdevices")
//    public ResponseEntity<String> recommendOfDevices(@RequestParam int productId){
//        String result = recommendationService.getRecommendOfDevices(productId);
//        return ResponseEntity.ok(result);
//    }

    @GetMapping("/recommendofuser")
    public  ResponseEntity<String> recommendOfUser(@RequestParam int userId){
        String result = recommendationService.getRecommendOfUser(userId);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/Admin/train")
    public ResponseEntity<String> train(){
        recommendationService.train();
        return ResponseEntity.ok("thành công");
    }
}

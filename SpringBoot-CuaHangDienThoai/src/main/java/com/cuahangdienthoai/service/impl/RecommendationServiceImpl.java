package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.service.RecommendationService;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;


@Service
public class RecommendationServiceImpl implements RecommendationService {
    @Override
    public String getRecommendOfDevices(int product) {
        String uri = "http://localhost:5000/sanphamcolienquan";
        String productId = Integer.toString(product);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri)
                .queryParam("product_id", productId);
        String finalUrl = builder.toUriString();
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(finalUrl, String.class);
        System.out.println("Response code: " + responseEntity.getStatusCode());
        System.out.println("Response body: " + responseEntity.getBody());
        return responseEntity.getBody();
    }
}

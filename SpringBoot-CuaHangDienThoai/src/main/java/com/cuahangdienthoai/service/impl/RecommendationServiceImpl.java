package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.service.RecommendationService;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;


@Service
public class RecommendationServiceImpl implements RecommendationService {
    @Override
    public String getRecommendOfDevices(Long product) {
        String uri = "http://localhost:5000/sanphamcolienquan";
        String productId = Long.toString(product);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri)
                .queryParam("product_id", productId);
        String finalUrl = builder.toUriString();
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(finalUrl, String.class);
        return responseEntity.getBody();
    }

    @Override
    public String getRecommendOfUser(int userId) {
        String uri = "http://localhost:5000/cothebanquantam";
        String productId = Integer.toString(userId);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri)
                .queryParam("user_id", userId);
        String finalUrl = builder.toUriString();
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(finalUrl, String.class);
        return responseEntity.getBody();
    }

    @Override
    public void train() {
        String uri = "http://localhost:5000/trainmodel";
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri);
        String finalUrl = builder.toUriString();
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(finalUrl, String.class);
    }
}

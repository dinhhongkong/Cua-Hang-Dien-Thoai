package com.cuahangdienthoai.service;

public interface RecommendationService {
    String getRecommendOfDevices(Long productID);
    String getRecommendOfUser(Long userId);

    void train();
}

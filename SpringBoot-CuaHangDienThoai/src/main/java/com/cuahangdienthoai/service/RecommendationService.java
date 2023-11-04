package com.cuahangdienthoai.service;

public interface RecommendationService {
    String getRecommendOfDevices(Long productID);
    String getRecommendOfUser(int userId);

    void train();
}

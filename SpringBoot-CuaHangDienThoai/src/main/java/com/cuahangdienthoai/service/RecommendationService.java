package com.cuahangdienthoai.service;

public interface RecommendationService {
    String getRecommendOfDevices(int productID);
    String getRecommendOfUser(int userId);
}

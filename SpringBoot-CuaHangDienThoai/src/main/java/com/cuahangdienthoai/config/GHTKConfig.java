package com.cuahangdienthoai.config;

import org.springframework.stereotype.Component;

@Component
public class GHTKConfig {
    public static String ghtk_Token = "ba3e7c62-6018-11ee-b1d4-92b443b7a897";
    public static String ghtk_ClientId = "2506429";
    public static String ghtk_ShopId = "189694";
    public static String ghtk_CreateOrder = "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create";
    public static String ghtk_OrderInfoByClientOrderCode = "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail-by-client-code";
    public static String ghtk_CancleOrder = "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel";
}

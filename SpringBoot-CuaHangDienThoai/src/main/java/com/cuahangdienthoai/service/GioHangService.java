package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;

import java.util.List;

public interface GioHangService {
    GioHang findById(GioHangId id);

    List<GioHang> findByUserId(long userId);
    GioHang findByGioHangIdAndUserId(long deviceId, long userId);
    void save(GioHang gioHang);

    void saveByDeviceIdAndUserId(long deviceId, long userId);

    void increaseQuantity(long deviceId, long userId);

    void decreaseQuantity(long deviceId, long userId);

    void updateQuantity(long deviceId, long userId, String cal);

    void deleteCart(long deviceId, long userId);
    void deleteById(GioHangId gioHangId);
}

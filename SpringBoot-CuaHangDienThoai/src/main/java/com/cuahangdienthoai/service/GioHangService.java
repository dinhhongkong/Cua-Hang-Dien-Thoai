package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;

import java.util.List;

public interface GioHangService {
    GioHang findById(GioHangId id);

    List<GioHang> findByUserId(long userId);
    GioHang findByGioHangIdAndUserId(long deviceId, long userId);
    void save(GioHang gioHang);

    void save(long deviceId, long userId);

    void increaseQuantity(long deviceId, long userId);

    void deleteCart(long deviceId, long userId);
    void deleteById(GioHangId gioHangId);
}

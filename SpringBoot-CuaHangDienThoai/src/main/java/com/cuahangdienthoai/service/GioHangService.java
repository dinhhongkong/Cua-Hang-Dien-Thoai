package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;

public interface GioHangService {
    GioHang findById(GioHangId id);

    GioHang findByGioHangIdAndUserId(long deviceId, long userId);
    void save(GioHang gioHang);

    void save(long deviceId, long userId);

    void deleteById(GioHangId gioHangId);
}

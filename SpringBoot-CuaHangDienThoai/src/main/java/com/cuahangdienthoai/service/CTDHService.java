package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.chitietdonhang.ChiTietDonHang;

import java.util.List;

public interface CTDHService {
    List<ChiTietDonHang> findAll();

    void save(ChiTietDonHang chiTietDonHang);
}

package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.DonHang;

import java.util.List;

public interface DonHangService {
    List<DonHang> findAll();

    void save(DonHang donhang);

    DonHang getDonHangByid(long id);
}

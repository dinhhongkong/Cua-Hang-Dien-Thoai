package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.entity.giohang.GioHang;

import java.util.List;

public interface DonHangService {
    List<DonHang> findAll();

    void save(DonHang donhang);

    DonHang findDonHangById(long id);
}

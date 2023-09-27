package com.cuahangdienthoai.repository;

import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface GioHangRepository extends JpaRepository<GioHang, GioHangId> {
    GioHang findByDeviceIdAndUserId(long deviceId, long userId);
    List<GioHang> findByUserId(long userId);

    void deleteByDeviceIdAndUserId(long deviceId, long userId);

}

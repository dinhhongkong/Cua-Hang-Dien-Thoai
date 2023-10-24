package com.cuahangdienthoai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cuahangdienthoai.entity.chitietdonhang.ChiTietDonHang;

public interface CTDHRepository extends JpaRepository<ChiTietDonHang,Long> {
}

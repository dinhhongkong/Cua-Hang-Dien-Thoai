package com.cuahangdienthoai.repository;

import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GioHangRepository extends JpaRepository<GioHang, GioHangId> {

}

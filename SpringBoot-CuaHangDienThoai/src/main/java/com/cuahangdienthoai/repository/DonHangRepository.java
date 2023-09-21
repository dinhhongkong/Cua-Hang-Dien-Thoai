package com.cuahangdienthoai.repository;
import com.cuahangdienthoai.entity.DonHang;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonHangRepository extends JpaRepository<DonHang,Long> {
    DonHang findById(long Id);
}

package com.cuahangdienthoai.service.impl;
import com.cuahangdienthoai.entity.chitietdonhang.ChiTietDonHang;
import com.cuahangdienthoai.repository.CTDHRepository;
import com.cuahangdienthoai.service.CTDHService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CTDHServiceImpl implements CTDHService {

    private CTDHRepository ctdhRepository;
    @Autowired
    public void setCtdhRepository(CTDHRepository ctdhRepository){this.ctdhRepository = ctdhRepository;}

    @Override
    public List<ChiTietDonHang> findAll() {
        return ctdhRepository.findAll();
    }
    @Override
    public void save(ChiTietDonHang chiTietDonHang) {
        ctdhRepository.save(chiTietDonHang);
    }
}

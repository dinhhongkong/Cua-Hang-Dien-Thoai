package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.repository.DonHangRepository;
import com.cuahangdienthoai.service.DonHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonHangServiceImpl implements DonHangService {
    private DonHangRepository donHangRepository;

    @Autowired
    private void setDonHangRepository(DonHangRepository donHangRepository) {
        this.donHangRepository = donHangRepository;
    }

    @Override
    public List<DonHang> findAll() {
        return donHangRepository.findAll();
    }

    @Override
    public void save(DonHang donhang) {
        donHangRepository.save(donhang);
    }

    @Override
    public DonHang findDonHangById(long id) {
        return donHangRepository.findById(id);
    }


}


package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;
import com.cuahangdienthoai.repository.GioHangRepository;
import com.cuahangdienthoai.service.GioHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GioHangServiceImpl implements GioHangService {

    private GioHangRepository gioHangRepository;
    @Autowired
    public void setGioHangRepository(GioHangRepository gioHangRepository) {
        this.gioHangRepository = gioHangRepository;
    }

    @Override
    public GioHang findById(GioHangId id) {
        Optional<GioHang> result = gioHangRepository.findById(id);
        GioHang gioHang = null;
        if (result.isPresent()) {
            gioHang = result.get();
        }
        else {
            throw new RuntimeException("Không tìm thấy gio hang id");
        }

        return gioHang;
    }

    @Override
    public GioHang findByGioHangIdAndUserId(long deviceId, long userId) {
        GioHang gioHang = gioHangRepository.findByDeviceIdAndUserId(deviceId, userId);
        if (gioHang == null) {
//            throw new RuntimeException("Không tìm thấy gio hang chứa "+ deviceId+ " của " + userId);
            System.out.println("Lỗi Không tìm thấy gio hang chứa "+ deviceId+ " của " + userId);
        }

        return gioHang;
    }

    @Override
    public void save(GioHang gioHang) {
        gioHangRepository.save(gioHang);
    }

    @Override
    public void deleteById(GioHangId gioHangId) {

    }
}

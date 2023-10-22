package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.entity.giohang.GioHang;
import com.cuahangdienthoai.entity.giohang.GioHangId;
import com.cuahangdienthoai.repository.GioHangRepository;
import com.cuahangdienthoai.service.GioHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public List<GioHang> findByUserId(long userId) {
        return gioHangRepository.findByUserId(userId);
    }

    @Override
    public GioHang findByGioHangIdAndUserId(long deviceId, long userId) {
        GioHang gioHang = gioHangRepository.findByDeviceIdAndUserId(deviceId, userId);
//        if (gioHang == null) {
//            throw new RuntimeException("Không tìm thấy gio hang chứa "+ deviceId+ " của " + userId);
//        }

        return gioHang;
    }

    @Override
    public void save(GioHang gioHang) {
        gioHangRepository.save(gioHang);
    }

    @Override
    public void saveByDeviceIdAndUserId(long deviceId, long userId) {
        GioHang gioHang = findByGioHangIdAndUserId(deviceId, userId);
        if (gioHang != null) {
            gioHang.setSoLuong(gioHang.getSoLuong() + 1);
            save(gioHang);
        } else {
            gioHang = new GioHang();
            User user = new User();
            user.setId(userId);
            Device device = new Device();
            device.setId(deviceId);

            gioHang.setUser(user);
            gioHang.setDevice(device);
            gioHang.setSoLuong(1L);
            save(gioHang);
        }
    }

    @Override
    public void increaseQuantity(long deviceId, long userId) {
        GioHang gioHang = findByGioHangIdAndUserId(deviceId, userId);
        if (gioHang != null) {
            gioHang.setSoLuong(gioHang.getSoLuong() +1);
            save(gioHang);
        } else {
            throw new RuntimeException("Không tìm thấy gio hang chứa "+ deviceId+ " của " + userId);
        }
    }

    @Override
    public void decreaseQuantity(long deviceId, long userId) {
        GioHang gioHang = findByGioHangIdAndUserId(deviceId, userId);
        if ( gioHang == null) {
            throw new RuntimeException("Không tìm thấy gio hang chứa "+ deviceId+ " của " + userId);
        }
        else if ( gioHang.getSoLuong() > 1) {
            gioHang.setSoLuong(gioHang.getSoLuong() - 1);
            save(gioHang);
        }
    }

    @Override
    public void updateQuantity(long deviceId, long userId, String cal) {
        if (cal.equals("plus")) {
            increaseQuantity(deviceId,userId);
        }
        else {
            decreaseQuantity(deviceId,userId);
        }
    }

    @Override
    public void deleteCart(long deviceId, long userId) {
        GioHang gioHang = findByGioHangIdAndUserId(deviceId, userId);
        if (gioHang != null) {
            gioHangRepository.deleteByDeviceIdAndUserId(deviceId,userId);
        } else {
            throw new RuntimeException("Không tìm thấy gio hang chứa "+ deviceId+ " của " + userId);
        }
    }

    @Override
    public void deleteById(GioHangId gioHangId) {

    }
}

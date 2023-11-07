package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.dto.DeviceQuantityDTO;
import com.cuahangdienthoai.dto.PaymentInfoDTO;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.DonHang;
import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.entity.chitietdonhang.ChiTietDonHang;
import com.cuahangdienthoai.repository.DonHangRepository;
import com.cuahangdienthoai.service.CTDHService;
import com.cuahangdienthoai.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class PaymentService {
    private DeviceService deviceService;
    private DonHangRepository donHangRepository;

    private CTDHService ctdhService;
    @Autowired
    public void setCtdhService(CTDHService ctdhService) {
        this.ctdhService = ctdhService;
    }

    @Autowired
    public void setDonHangRepository(DonHangRepository donHangRepository) {
        this.donHangRepository = donHangRepository;
    }

    @Autowired
    public void setDeviceService(DeviceService deviceService) {
        this.deviceService = deviceService;
    }



    public int getTotal(List<DeviceQuantityDTO> devices) {
        int total = 0;
        for (DeviceQuantityDTO i : devices) {
            Device device =  deviceService.findById( i.getDeviceId());
            total +=  device.getGia();
        }
        return total;
    }

    @Transactional
    public void handleOrderInfo(User user, PaymentInfoDTO paymentInfo) {
        DonHang donHang = new DonHang();
        donHang.setUser(user);
        donHang.setSdt(paymentInfo.getPhone());
        donHang.setTenNguoiNhan(paymentInfo.getName());
        donHang.setDiaChi(paymentInfo.getAddress());
        donHang.setGhiChu("");
        donHang.setNgayLap( new Date());
        donHang.setMaThanhToan(0);
        donHang.setTrangThai(0);

        donHang = donHangRepository.save(donHang);

        for(DeviceQuantityDTO item: paymentInfo.getDevices()) {
            ChiTietDonHang ctDonHang = new ChiTietDonHang();
            Device device = deviceService.findById(item.getDeviceId());
            device.setId(item.getDeviceId());
            ctDonHang.setDevice(device);
            ctDonHang.setDonHang(donHang);
            ctDonHang.setSoLuong(item.getQuantity());
            ctDonHang.setGia(device.getGia());
            ctdhService.save(ctDonHang);
        }
        int total = 0;
        for ( DeviceQuantityDTO item : paymentInfo.getDevices()) {
            Device device = deviceService.findById(item.getDeviceId());
            total += (int) (device.getGia() * item.getQuantity());
        }

    }



}

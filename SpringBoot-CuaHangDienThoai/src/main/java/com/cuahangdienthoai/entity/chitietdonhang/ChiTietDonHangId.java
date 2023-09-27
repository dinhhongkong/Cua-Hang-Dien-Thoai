package com.cuahangdienthoai.entity.chitietdonhang;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.DonHang;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor

public class ChiTietDonHangId implements Serializable {
    private DonHang donHang;
    private Device device;
}

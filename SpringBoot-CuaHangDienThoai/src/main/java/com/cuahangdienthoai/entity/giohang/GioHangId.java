package com.cuahangdienthoai.entity.giohang;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.User;
import lombok.AllArgsConstructor;

import java.io.Serializable;

public class GioHangId implements Serializable {
    private User user;
    private Device device;

    public GioHangId(User user, Device device) {
        this.user = user;
        this.device = device;
    }
}

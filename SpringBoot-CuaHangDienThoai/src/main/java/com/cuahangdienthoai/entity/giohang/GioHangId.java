package com.cuahangdienthoai.entity.giohang;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor @NoArgsConstructor
public class GioHangId implements Serializable {
    private User user;
    private Device device;

}

package com.cuahangdienthoai.entity.giohang;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "gio_hang")
@IdClass(GioHangId.class)
public class GioHang {
    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "device_id")
    private Device device;

    @Column(name="so_luong")
    private Long soLuong;
}

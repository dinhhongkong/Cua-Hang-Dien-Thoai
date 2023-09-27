package com.cuahangdienthoai.entity.chitietdonhang;

import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.entity.DonHang;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Table(name = "ct_don_hang")
@IdClass(ChiTietDonHangId.class)
public class ChiTietDonHang {
    @Id
    @ManyToOne()
    @JoinColumn(name = "id_don_hang")
    private DonHang donHang;

    @Id
    @ManyToOne()
    @JoinColumn(name = "id_san_pham")
    private Device device;

    @Column(name = "so_luong")
    private Integer soLuong;

    private Double gia;




}

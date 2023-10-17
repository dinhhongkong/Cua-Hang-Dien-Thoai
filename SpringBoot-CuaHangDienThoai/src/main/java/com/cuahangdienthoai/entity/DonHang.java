package com.cuahangdienthoai.entity;

import com.cuahangdienthoai.entity.chitietdonhang.ChiTietDonHang;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "don_hang")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DonHang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "sdt")
    private String sdt;

    @Column(name = "ten_nguoi_nhan")
    private String tenNguoiNhan;

    @Column(name = "dia_chi")
    private String diaChi;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "ngay_lap")
    private Date ngayLap;

    @Column(name = "ngay_nhan")
    private Date ngayNhan;

    @Column(name = "ma_thanh_toan")
    private Integer maThanhToan;

    @Column(name = "trang_thai")
    private int trangThai;

    @OneToMany(mappedBy = "donHang",fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @ToString.Exclude
    @JsonIgnore
    private List<ChiTietDonHang> listCTDonHang;

}

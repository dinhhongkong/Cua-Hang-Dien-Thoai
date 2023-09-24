package com.cuahangdienthoai.entity;

import com.cuahangdienthoai.repository.UserRepository;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

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

    @Column(name = "dia_chi")
    private String diaChi;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "ngay_lap")
    private Date ngayLap;

    @Column(name = "ngay_nhan")
    private Date ngayNhan;

    @Column(name = "trang_thai")
    private int trangThai;

}

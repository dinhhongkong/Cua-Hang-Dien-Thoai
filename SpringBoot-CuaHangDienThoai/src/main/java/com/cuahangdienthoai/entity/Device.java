package com.cuahangdienthoai.entity;

import com.cuahangdienthoai.entity.giohang.GioHang;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="devices")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "url_hash")
    private String urlHash;
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "brand_id")
    @ToString.Exclude
    @JsonIgnore
    private Brand brand;
    @Column(name = "device_name")
    private String deviceName;
    private String picture;
    @Column(name = "released_at")
    private String releaseAt;
    private String body;
    private String os;
    private String storage;
    @Column(name = "display_size")
    private String displaySize;
    @Column(name = "display_Resolution")
    private String displayResolution;
    @Column(name = "camera_pixels")
    private String cameraPixels;
    @Column(name = "video_pixels")
    private String videoPixels;
    private String ram;
    private String chipset;
    @Column(name = "battery_size")
    private String batterySize;
    @Column(name = "battery_type")
    private String batteryType;
    private String specifications;
    @Column(name = "deleted_at")
    private Date deletedAt;
    @Column(name = "so_luong")
    private Long soLuong;
    private Double gia;


    @OneToMany(mappedBy = "device",
            fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @ToString.Exclude
    @JsonIgnore
    private List<GioHang> gioHang;

    public String getPriceFormat(){
        long roundedMoney = Math.round(gia);
        DecimalFormat decimalFormat = new DecimalFormat("###,###");
        return decimalFormat.format(roundedMoney);
    }

}

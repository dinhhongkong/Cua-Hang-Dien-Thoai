package com.cuahangdienthoai.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentInfoDTO {
    private List<DeviceQuantityDTO> devices;
    private String name;
    private String phone;
    private String address;
    private Integer paymentMethod;
}

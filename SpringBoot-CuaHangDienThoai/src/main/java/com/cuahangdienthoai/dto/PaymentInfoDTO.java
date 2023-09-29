package com.cuahangdienthoai.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentInfoDTO {
    private List<Integer> devicesId;
    private String name;
    private String phoneNumber;
    private String address;
    private Integer paymentMethod;
}
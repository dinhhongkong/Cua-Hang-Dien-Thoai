package com.cuahangdienthoai.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
public class DeviceQuantityDTO {
    private Long deviceId;
    private Integer quantity;
}

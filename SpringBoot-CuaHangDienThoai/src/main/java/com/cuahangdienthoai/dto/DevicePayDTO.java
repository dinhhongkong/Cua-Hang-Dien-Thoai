package com.cuahangdienthoai.dto;

import com.cuahangdienthoai.entity.Device;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
public class DevicePayDTO {
    private Device device;
    private Integer quantity;
}

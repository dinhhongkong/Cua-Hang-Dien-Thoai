package com.cuahangdienthoai.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
public class DeviceJsonDTO {
    private Long deviceId;
    private Integer quantity;
}

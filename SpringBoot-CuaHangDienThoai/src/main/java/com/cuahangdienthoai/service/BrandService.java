package com.cuahangdienthoai.service;
import com.cuahangdienthoai.entity.Brand;
import com.cuahangdienthoai.entity.Device;

import java.util.List;

public interface BrandService {
    List<Brand> findAll();
    Brand findById(Long brandId);
    void deleteById(Long brandId);
    void save(Brand brand);

}

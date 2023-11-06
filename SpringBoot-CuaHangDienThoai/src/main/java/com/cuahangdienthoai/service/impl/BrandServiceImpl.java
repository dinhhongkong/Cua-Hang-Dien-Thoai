package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.Brand;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.repository.BrandRepository;
import com.cuahangdienthoai.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrandServiceImpl implements BrandService {
    private BrandRepository brandsRepository;
    @Autowired
    public void setBrandsRepository(BrandRepository brandsRepository) {
        this.brandsRepository = brandsRepository;
    }

    @Override
    public List<Brand> findAll() {
        return brandsRepository.findAll() ;
    }

    @Override
    public Brand findById(Long brandId) {
        Optional<Brand> result = brandsRepository.findById(brandId);
        Brand brand = null;
        if (result.isPresent()) {
            brand = result.get();
        }
        else {
            throw new RuntimeException("Did not find brand id - " + brandId);
        }

        return brand;
    }

    @Override
    public void deleteById(Long brandId) {
        brandsRepository.deleteById(brandId);
    }

    @Override
    public void save(Brand brand) {
        brandsRepository.save(brand);
    }

}

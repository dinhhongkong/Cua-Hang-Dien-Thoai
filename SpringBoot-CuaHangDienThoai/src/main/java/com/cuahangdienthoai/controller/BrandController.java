package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.Brand;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BrandController {
    private BrandService brandService;

    @Autowired
    public void setBrandService(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping("/brand")
    public List<Brand> all() {
        return brandService.findAll();
    }



    @PostMapping("/brand")
    public ResponseEntity<Brand> createBrand(@RequestBody Brand newBrand) {
        brandService.save(newBrand);
        return new ResponseEntity<>(newBrand,HttpStatus.CREATED);
    }


}

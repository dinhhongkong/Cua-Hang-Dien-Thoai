package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.dto.DeviceQuantityDTO;
import com.cuahangdienthoai.dto.DevicePayDTO;
import com.cuahangdienthoai.entity.Device;
import com.cuahangdienthoai.repository.DeviceRepository;
import com.cuahangdienthoai.repository.DeviceSpecifications;
import com.cuahangdienthoai.service.DeviceService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DeviceServiceImpl implements DeviceService {
    private DeviceRepository deviceRepository;

    private RecommendationServiceImpl recommendationService;

    @Autowired
    public void setRecommendationService(RecommendationServiceImpl recommendationService) {
        this.recommendationService = recommendationService;
    }

    @Autowired
    public void setDeviceRepository(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    @Override
    public Page<Device> findAll(Pageable pageable) {
        return deviceRepository.findAll(pageable);
    }

    public List<Device> findAllDevice() {
        return deviceRepository.findAll();
    }

    @Override
    public ArrayList<Device> RecommendOfDevices(Long deviceId) {
        String jsonString = recommendationService.getRecommendOfDevices(deviceId);
        ObjectMapper objectMapper = new ObjectMapper();
        ArrayList<Long> devicesId;
        ArrayList<Device> devices = new ArrayList<>();
        try {
            devicesId = objectMapper.readValue(jsonString, new TypeReference<ArrayList<Long>>(){});
            for(Long item: devicesId ) {
                Optional<Device> device =  deviceRepository.findById(item);
                if( device.isPresent()) {
                    devices.add(device.get());
                }

            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return devices ;
    }

    @Override
    public List<Device> findGiaBetween(double giaBatDau, double giaKetThuc, Pageable pageable) {
        return deviceRepository.findByGiaBetween(giaBatDau,giaKetThuc,pageable);
    }

    @Override
    public Device findById(Long deviceId) {
        Optional<Device> result = deviceRepository.findById(deviceId);
        Device device = null;
        if (result.isPresent()) {
            device = result.get();
        }
        else {
            throw new RuntimeException("Không tìm thấy device id");
        }

        return device;
    }

    @Override
    public Device findByDeviceName(String deviceName) {
        Device result = deviceRepository.findDeviceByDeviceName(deviceName);
        if (result == null) {
            throw new RuntimeException("Không tìm thấy device id");
        }
        return result;
    }

    @Override
    public void deleteById(long deviceId) {

    }

    @Override
    public void save(Device device) {
        deviceRepository.save(device);
    }

    @Override
    public Page<Device> findByNameContaining(String keyword, Pageable pageable) {
        return deviceRepository.findByDeviceNameContaining(keyword, pageable);
    }

    @Override
    public ArrayList<DevicePayDTO> prepareDeviceForPayment(List<DeviceQuantityDTO> data) {
        ArrayList<DevicePayDTO> deviceList = new ArrayList<DevicePayDTO>();
        for (DeviceQuantityDTO deviceQuantityDTO : data) {
            DevicePayDTO devicePayDTO = new DevicePayDTO();
            devicePayDTO.setDevice( findById(deviceQuantityDTO.getDeviceId()));
            devicePayDTO.setQuantity(deviceQuantityDTO.getQuantity());
            deviceList.add(devicePayDTO);
        }
        return deviceList;
    }

    @Override
    public Page<Device> searchProducts(String name, Double minPrice, Double maxPrice, Long brand, Pageable pageable) {
        Specification<Device> spec = new DeviceSpecifications(name, minPrice, maxPrice, brand );
        return deviceRepository.findAll(spec,pageable);
    }
}

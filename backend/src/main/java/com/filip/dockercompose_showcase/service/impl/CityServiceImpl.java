package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.dto.CityDTO;
import com.filip.dockercompose_showcase.entity.CityEntity;
import com.filip.dockercompose_showcase.mapper.CityMapper;
import com.filip.dockercompose_showcase.repository.CityRepository;
import com.filip.dockercompose_showcase.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CityServiceImpl implements CityService {

    private final CityRepository cityRepository;

    @Autowired
    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public List<CityDTO> findAll() {
        return cityRepository.findAll()
                .stream()
                .map(CityMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<CityDTO> findById(String cityId) {
        return cityRepository.findById(cityId)
                .map(CityMapper::toDTO);
    }

    @Override
    public CityDTO save(CityDTO cityDTO) {
        CityEntity cityEntity = CityMapper.toEntity(cityDTO);
        CityEntity savedCity = cityRepository.save(cityEntity);
        return CityMapper.toDTO(savedCity);
    }

    @Override
    public CityDTO update(String cityId, CityDTO cityDTO) {
        return cityRepository.findById(cityId)
                .map(existingCity -> {
                    CityEntity updatedCity = CityMapper.toEntity(cityDTO);
                    updatedCity.setCityId(existingCity.getCityId());
                    CityEntity savedCity = cityRepository.save(updatedCity);
                    return CityMapper.toDTO(savedCity);
                })
                .orElseThrow(() -> new RuntimeException("City not found with id " + cityId));
    }

    @Override
    public void deleteById(String cityId) {
        cityRepository.deleteById(cityId);
    }
}


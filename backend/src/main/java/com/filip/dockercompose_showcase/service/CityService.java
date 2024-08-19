package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.dto.CityDTO;

import java.util.List;
import java.util.Optional;

public interface CityService {
    List<CityDTO> findAll();
    Optional<CityDTO> findById(String cityId);
    CityDTO save(CityDTO cityDTO);
    CityDTO update(String cityId, CityDTO cityDTO);
    void deleteById(String cityId);
}

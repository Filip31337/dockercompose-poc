package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.entity.CityEntity;

import java.util.List;
import java.util.Optional;

public interface CityService {
    List<CityEntity> findAll();
    Optional<CityEntity> findById(String cityId);
    CityEntity save(CityEntity cityEntity);
    CityEntity update(String cityId, CityEntity cityEntity);
    void deleteById(String cityId);
}

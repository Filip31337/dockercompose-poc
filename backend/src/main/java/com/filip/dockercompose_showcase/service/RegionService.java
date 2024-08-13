package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.entity.RegionEntity;

import java.util.List;
import java.util.Optional;

public interface RegionService {
    List<RegionEntity> findAll();
    Optional<RegionEntity> findById(String regionId);
    RegionEntity save(RegionEntity region);
    RegionEntity update(String regionId, RegionEntity region);
    void deleteById(String regionId);
}

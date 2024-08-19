package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.dto.RegionDTO;
import com.filip.dockercompose_showcase.entity.RegionEntity;

import java.util.List;
import java.util.Optional;

public interface RegionService {
    List<RegionDTO> findAll();
    Optional<RegionDTO> findById(String regionId);
    RegionDTO save(RegionDTO region);
    RegionDTO update(String regionId, RegionDTO regionDTO);
    void deleteById(String regionId);
}

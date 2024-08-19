package com.filip.dockercompose_showcase.mapper;

import com.filip.dockercompose_showcase.dto.RegionDTO;
import com.filip.dockercompose_showcase.entity.RegionEntity;

public class RegionMapper {
    public static RegionDTO toDTO(RegionEntity entity) {
        RegionDTO dto = new RegionDTO();
        dto.setRegionId(entity.getRegionId());
        dto.setName(entity.getName());
        return dto;
    }

    public static RegionEntity toEntity(RegionDTO regionDTO) {
        RegionEntity regionEntity = new RegionEntity();
        regionEntity.setName(regionDTO.getName());
        regionEntity.setRegionId(regionDTO.getRegionId());
        return regionEntity;
    }
}

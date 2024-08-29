package com.filip.dockercompose_showcase.mapper;

import com.filip.dockercompose_showcase.dto.CountryDTO;
import com.filip.dockercompose_showcase.dto.RegionDTO;
import com.filip.dockercompose_showcase.entity.CountryEntity;
import com.filip.dockercompose_showcase.entity.RegionEntity;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class RegionMapper {
    public static RegionDTO toDTO(RegionEntity regionEntity) {
        RegionDTO dto = new RegionDTO();
        dto.setRegionId(regionEntity.getRegionId());
        dto.setName(regionEntity.getName());
        List<CountryDTO> countryDTOs = regionEntity.getCountries().stream()
                .map(CountryMapper::toDTO)
                .collect(Collectors.toList());
        dto.setCountries(countryDTOs);
        return dto;
    }

    public static RegionEntity toEntity(RegionDTO regionDTO) {
        RegionEntity regionEntity = new RegionEntity();
        regionEntity.setName(regionDTO.getName());
        regionEntity.setRegionId(regionDTO.getRegionId());
        Set<CountryEntity> countryEntities = regionDTO.getCountries().stream()
                .map(countryDTO -> CountryMapper.toEntity(countryDTO, regionEntity))
                .collect(Collectors.toSet());
        regionEntity.setCountries(countryEntities);
        return regionEntity;
    }
}

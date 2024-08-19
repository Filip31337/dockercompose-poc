package com.filip.dockercompose_showcase.mapper;

import com.filip.dockercompose_showcase.dto.CountryDTO;
import com.filip.dockercompose_showcase.entity.CountryEntity;
import org.springframework.stereotype.Component;

public class CountryMapper {
    public static CountryDTO toDTO(CountryEntity entity) {
        CountryDTO dto = new CountryDTO();
        dto.setCountryId(entity.getCountryId());
        dto.setCountryCode(entity.getCountryCode());
        dto.setName(entity.getName());
        dto.setOfficialName(entity.getOfficialName());
        dto.setPopulation(entity.getPopulation());
        dto.setAreaSqKm(entity.getAreaSqKm());
        dto.setLatitude(entity.getLatitude());
        dto.setLongitude(entity.getLongitude());
        dto.setTimezone(entity.getTimezone());
        dto.setRegionId(entity.getRegionEntity().getRegionId());
        return dto;
    }

    public static CountryEntity toEntity(CountryDTO countryDTO) {
        CountryEntity countryEntity = new CountryEntity();
        countryEntity.setCountryId(countryDTO.getCountryId());
        countryEntity.setCountryCode(countryDTO.getCountryCode());
        countryEntity.setAreaSqKm(countryDTO.getAreaSqKm());
        countryEntity.setLatitude(countryDTO.getLatitude());
        countryEntity.setLongitude(countryDTO.getLongitude());
        countryEntity.setName(countryDTO.getName());
        countryEntity.setOfficialName(countryDTO.getOfficialName());
        countryEntity.setTimezone(countryDTO.getTimezone());
        countryEntity.setPopulation(countryDTO.getPopulation());
        return countryEntity;
    }
}

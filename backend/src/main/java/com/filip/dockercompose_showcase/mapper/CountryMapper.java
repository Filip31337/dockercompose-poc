package com.filip.dockercompose_showcase.mapper;

import com.filip.dockercompose_showcase.dto.CountryDTO;
import com.filip.dockercompose_showcase.entity.CountryEntity;
import com.filip.dockercompose_showcase.entity.RegionEntity;

public class CountryMapper {
    public static CountryDTO toDTO(CountryEntity entity) {
        CountryDTO dto = new CountryDTO();
        dto.setCountryId(entity.getCountryId());
        dto.setCountry_code(entity.getCountryCode());
        dto.setName(entity.getName());
        dto.setOfficial_name(entity.getOfficialName());
        dto.setPopulation(entity.getPopulation());
        dto.setArea_sq_km(entity.getAreaSqKm());
        dto.setLatitude(entity.getLatitude());
        dto.setLongitude(entity.getLongitude());
        dto.setTimezone(entity.getTimezone());
        dto.setRegionId(entity.getRegionEntity().getRegionId());
        return dto;
    }

    public static CountryEntity toEntity(CountryDTO countryDTO, RegionEntity regionEntity) {
        CountryEntity countryEntity = new CountryEntity();
        countryEntity.setCountryId(countryDTO.getCountryId());
        countryEntity.setCountryCode(countryDTO.getCountry_code());
        countryEntity.setAreaSqKm(countryDTO.getArea_sq_km());
        countryEntity.setLatitude(countryDTO.getLatitude());
        countryEntity.setLongitude(countryDTO.getLongitude());
        countryEntity.setName(countryDTO.getName());
        countryEntity.setOfficialName(countryDTO.getOfficial_name());
        countryEntity.setTimezone(countryDTO.getTimezone());
        countryEntity.setPopulation(countryDTO.getPopulation());
        countryEntity.setRegionEntity(regionEntity);
        return countryEntity;
    }
}

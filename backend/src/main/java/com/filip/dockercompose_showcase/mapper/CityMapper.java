package com.filip.dockercompose_showcase.mapper;

import com.filip.dockercompose_showcase.dto.CityDTO;
import com.filip.dockercompose_showcase.entity.CityEntity;
import com.filip.dockercompose_showcase.entity.CountryEntity;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CityMapper {

    private static final char IS_CAPITAL = 'Y';
    private static final char IS_NOT_CAPITAL = 'N';

    public static CityDTO toDTO(CityEntity entity) {
        CityDTO dto = new CityDTO();
        dto.setCityId(entity.getCityId());
        dto.setName(entity.getName());
        dto.setPopulation(entity.getPopulation());
        dto.setIsCapital(IS_CAPITAL == entity.getIsCapital());
        dto.setCountryId(entity.getCountry().getCountryId());
        return dto;
    }

    public static CityEntity toEntity(CityDTO cityDTO, CountryEntity countryEntity) {
        log.debug("Entered toEntity with cityDto: " + cityDTO.toString());
        CityEntity cityEntity = new CityEntity();
        cityEntity.setCountry(countryEntity);
        cityEntity.setCityId(cityDTO.getCityId());
        cityEntity.setIsCapital(Boolean.TRUE.equals(cityDTO.getIsCapital()) ? IS_CAPITAL : IS_NOT_CAPITAL);
        cityEntity.setPopulation(cityDTO.getPopulation());
        cityEntity.setName(cityDTO.getName());
        return cityEntity;
    }
}

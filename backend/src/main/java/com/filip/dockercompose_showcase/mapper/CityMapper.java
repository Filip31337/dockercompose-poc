package com.filip.dockercompose_showcase.mapper;

import com.filip.dockercompose_showcase.dto.CityDTO;
import com.filip.dockercompose_showcase.entity.CityEntity;
import org.springframework.stereotype.Component;

public class CityMapper {

    private static final char IS_CAPITAL = 'Y';
    private static final char IS_NOT_CAPITAL = 'N';

    public static CityDTO toDTO(CityEntity entity) {
        CityDTO dto = new CityDTO();
        dto.setCityId(entity.getCityId());
        dto.setName(entity.getName());
        dto.setPopulation(entity.getPopulation());
        dto.setCapital(IS_CAPITAL == entity.getIsCapital());
        dto.setCountryId(entity.getCountry().getCountryId());
        return dto;
    }

    public static CityEntity toEntity(CityDTO cityDTO) {
        CityEntity cityEntity = new CityEntity();
        cityEntity.setCityId(cityDTO.getCityId());
        cityEntity.setIsCapital(cityDTO.getCapital() ? IS_CAPITAL : IS_NOT_CAPITAL);
        cityEntity.setPopulation(cityDTO.getPopulation());
        cityEntity.setName(cityDTO.getName());
        return cityEntity;
    }
}

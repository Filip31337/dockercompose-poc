package com.filip.dockercompose_showcase.mapper;

import com.filip.dockercompose_showcase.dto.CurrencyDTO;
import com.filip.dockercompose_showcase.entity.CurrencyEntity;

public class CurrencyMapper {
    public static CurrencyDTO toDTO(CurrencyEntity entity) {
        CurrencyDTO dto = new CurrencyDTO();
        dto.setCurrencyId(entity.getCurrencyId());
        dto.setName(entity.getName());
        dto.setOfficialName(entity.getOfficialName());
        dto.setSymbol(entity.getSymbol());
        return dto;
    }

    public static CurrencyEntity toEntity(CurrencyDTO currencyDTO) {
        CurrencyEntity currencyEntity = new CurrencyEntity();
        currencyEntity.setName(currencyDTO.getName());
        currencyEntity.setOfficialName(currencyDTO.getOfficialName());
        currencyEntity.setSymbol(currencyDTO.getSymbol());
        currencyEntity.setCurrencyId(currencyDTO.getCurrencyId());
        return currencyEntity;
    }
}

package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.dto.CurrencyDTO;
import com.filip.dockercompose_showcase.entity.CurrencyEntity;

import java.util.List;
import java.util.Optional;

public interface CurrencyService {
    List<CurrencyDTO> findAll();
    Optional<CurrencyDTO> findById(String currencyId);
    CurrencyDTO save(CurrencyDTO currencyDTO);
    CurrencyDTO update(String currencyId, CurrencyDTO currencyDTO);
    void deleteById(String currencyId);
}

package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.entity.CurrencyEntity;

import java.util.List;
import java.util.Optional;

public interface CurrencyService {
    List<CurrencyEntity> findAll();
    Optional<CurrencyEntity> findById(String currencyId);
    CurrencyEntity save(CurrencyEntity currency);
    CurrencyEntity update(String currencyId, CurrencyEntity currency);
    void deleteById(String currencyId);
}

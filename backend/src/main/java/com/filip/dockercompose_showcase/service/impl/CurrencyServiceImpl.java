package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.entity.CurrencyEntity;
import com.filip.dockercompose_showcase.repository.CurrencyRepository;
import com.filip.dockercompose_showcase.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CurrencyServiceImpl implements CurrencyService {

    private final CurrencyRepository currencyRepository;

    @Autowired
    public CurrencyServiceImpl(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    @Override
    public List<CurrencyEntity> findAll() {
        return currencyRepository.findAll();
    }

    @Override
    public Optional<CurrencyEntity> findById(String currencyId) {
        return currencyRepository.findById(currencyId);
    }

    @Override
    public CurrencyEntity save(CurrencyEntity currency) {
        return currencyRepository.save(currency);
    }

    @Override
    public CurrencyEntity update(String currencyId, CurrencyEntity currency) {
        return currencyRepository.findById(currencyId)
                .map(existingCurrency -> {
                    existingCurrency.setName(currency.getName());
                    existingCurrency.setOfficialName(currency.getOfficialName());
                    existingCurrency.setSymbol(currency.getSymbol());
                    return currencyRepository.save(existingCurrency);
                })
                .orElseThrow(() -> new RuntimeException("Currency not found with id " + currencyId));
    }

    @Override
    public void deleteById(String currencyId) {
        currencyRepository.deleteById(currencyId);
    }
}

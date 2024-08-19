package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.dto.CurrencyDTO;
import com.filip.dockercompose_showcase.entity.CurrencyEntity;
import com.filip.dockercompose_showcase.mapper.CurrencyMapper;
import com.filip.dockercompose_showcase.repository.CurrencyRepository;
import com.filip.dockercompose_showcase.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CurrencyServiceImpl implements CurrencyService {

    private final CurrencyRepository currencyRepository;

    @Autowired
    public CurrencyServiceImpl(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    @Override
    public List<CurrencyDTO> findAll() {
        return currencyRepository.findAll()
                .stream()
                .map(CurrencyMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<CurrencyDTO> findById(String currencyId) {
        return currencyRepository.findById(currencyId)
                .map(CurrencyMapper::toDTO);
    }

    @Override
    public CurrencyDTO save(CurrencyDTO currencyDTO) {
        CurrencyEntity currencyEntity = CurrencyMapper.toEntity(currencyDTO);
        CurrencyEntity savedCurrency = currencyRepository.save(currencyEntity);

        return CurrencyMapper.toDTO(savedCurrency);
    }

    @Override
    public CurrencyDTO update(String currencyId, CurrencyDTO currencyDTO) {
        return currencyRepository.findById(currencyId)
                .map(existingCurrency -> {
                    CurrencyEntity updatedCurrency = CurrencyMapper.toEntity(currencyDTO);
                    updatedCurrency.setCurrencyId(existingCurrency.getCurrencyId());
                    CurrencyEntity savedCurrency = currencyRepository.save(updatedCurrency);
                    return CurrencyMapper.toDTO(savedCurrency);
                })
                .orElseThrow(() -> new RuntimeException("Currency not found with id " + currencyId));
    }

    @Override
    public void deleteById(String currencyId) {
        currencyRepository.deleteById(currencyId);
    }
}

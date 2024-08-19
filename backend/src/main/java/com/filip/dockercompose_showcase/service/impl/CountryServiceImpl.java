package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.dto.CountryDTO;
import com.filip.dockercompose_showcase.entity.CountryEntity;
import com.filip.dockercompose_showcase.mapper.CountryMapper;
import com.filip.dockercompose_showcase.repository.CountryRepository;
import com.filip.dockercompose_showcase.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    @Autowired
    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<CountryDTO> findAll() {
        return countryRepository.findAll()
                .stream()
                .map(CountryMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<CountryDTO> findById(String countryId) {
        return countryRepository.findById(countryId)
                .map(CountryMapper::toDTO);
    }

    @Override
    public CountryDTO save(CountryDTO countryDTO) {
        CountryEntity countryEntity = CountryMapper.toEntity(countryDTO);
        CountryEntity savedCountry = countryRepository.save(countryEntity);
        return CountryMapper.toDTO(savedCountry);
    }

    @Override
    public CountryDTO update(String countryId, CountryDTO countryDTO) {
        return countryRepository.findById(countryId)
                .map(existingCountry -> {
                    CountryEntity updatedCountry = CountryMapper.toEntity(countryDTO);
                    updatedCountry.setCountryId(existingCountry.getCountryId());
                    CountryEntity savedCountry = countryRepository.save(updatedCountry);
                    return CountryMapper.toDTO(savedCountry);
                })
                .orElseThrow(() -> new RuntimeException("Country not found with id " + countryId));
    }

    @Override
    public void deleteById(String countryId) {
        countryRepository.deleteById(countryId);
    }
}

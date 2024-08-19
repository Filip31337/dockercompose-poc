package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.dto.CountryDTO;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<CountryDTO> findAll();
    Optional<CountryDTO> findById(String countryId);
    CountryDTO save(CountryDTO countryDTO);
    CountryDTO update(String countryId, CountryDTO countryDTO);
    void deleteById(String countryId);
}

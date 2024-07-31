package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.entity.Country;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<Country> findAll();
    Optional<Country> findById(String countryId);
    Country save(Country country);
    void deleteById(String countryId);
}

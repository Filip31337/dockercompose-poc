package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.entity.CountryEntity;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<CountryEntity> findAll();
    Optional<CountryEntity> findById(String countryId);
    CountryEntity save(CountryEntity countryEntity);
    void deleteById(String countryId);
}

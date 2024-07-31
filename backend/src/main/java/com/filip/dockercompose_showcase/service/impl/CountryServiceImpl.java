package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.entity.Country;
import com.filip.dockercompose_showcase.repository.CountryRepository;
import com.filip.dockercompose_showcase.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<Country> findAll() {
        return countryRepository.findAll();
    }

    @Override
    public Optional<Country> findById(String countryId) {
        return countryRepository.findById(countryId);
    }

    @Override
    public Country save(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public void deleteById(String countryId) {
        countryRepository.deleteById(countryId);
    }
}

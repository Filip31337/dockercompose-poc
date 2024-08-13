package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.entity.CityEntity;
import com.filip.dockercompose_showcase.repository.CityRepository;
import com.filip.dockercompose_showcase.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {

    private final CityRepository cityRepository;

    @Autowired
    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public List<CityEntity> findAll() {
        return cityRepository.findAll();
    }

    @Override
    public Optional<CityEntity> findById(String cityId) {
        return cityRepository.findById(cityId);
    }

    @Override
    public CityEntity save(CityEntity city) {
        return cityRepository.save(city);
    }

    @Override
    public CityEntity update(String cityId, CityEntity city) {
        return cityRepository.findById(cityId)
                .map(existingCity -> {
                    existingCity.setName(city.getName());
                    existingCity.setOfficialName(city.getOfficialName());
                    existingCity.setPopulation(city.getPopulation());
                    existingCity.setIsCapital(city.getIsCapital());
                    existingCity.setLatitude(city.getLatitude());
                    existingCity.setLongitude(city.getLongitude());
                    existingCity.setTimezone(city.getTimezone());
                    existingCity.setCountry(city.getCountry());
                    return cityRepository.save(existingCity);
                })
                .orElseThrow(() -> new RuntimeException("City not found with id " + cityId));
    }

    @Override
    public void deleteById(String cityId) {
        cityRepository.deleteById(cityId);
    }
}

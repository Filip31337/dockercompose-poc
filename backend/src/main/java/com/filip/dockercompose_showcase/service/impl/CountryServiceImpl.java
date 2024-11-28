package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.dto.CountryDTO;
import com.filip.dockercompose_showcase.entity.CountryEntity;
import com.filip.dockercompose_showcase.entity.RegionEntity;
import com.filip.dockercompose_showcase.mapper.CountryMapper;
import com.filip.dockercompose_showcase.repository.CountryRepository;
import com.filip.dockercompose_showcase.repository.RegionRepository;
import com.filip.dockercompose_showcase.service.CountryService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    private final RegionRepository regionRepository;

    @Autowired
    public CountryServiceImpl(CountryRepository countryRepository,
                              RegionRepository regionRepository) {
        this.countryRepository = countryRepository;
        this.regionRepository = regionRepository;
    }

    @Override
    public List<CountryDTO> findAll() {
        return countryRepository.findAll()
                .stream()
                .map(CountryMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Page<CountryDTO> findAllPaginated(int page, int pageSize) {
        Pageable pageable = PageRequest.of(page, pageSize);
        return countryRepository.findAll(pageable)
                .map(CountryMapper::toDTO);
    }

    @Override
    public Page<CountryDTO> findAllPaginated(int page, int pageSize, String globalFilter) {
        Pageable pageable = PageRequest.of(page, pageSize);

        if (globalFilter == null || globalFilter.isBlank()) {
            return countryRepository.findAll(pageable)
                    .map(CountryMapper::toDTO);
        }

        return countryRepository.findByGlobalFilter(globalFilter, pageable)
                .map(CountryMapper::toDTO);
    }

    @Override
    public Optional<CountryDTO> findById(String countryId) {
        return countryRepository.findById(countryId)
                .map(CountryMapper::toDTO);
    }

    @Override
    public CountryDTO save(CountryDTO countryDTO) {
        RegionEntity regionEntity = regionRepository.findById(countryDTO.getRegionId())
                .orElseThrow(() -> new EntityNotFoundException("Region not found"));
        CountryEntity countryEntity = CountryMapper.toEntity(countryDTO, regionEntity);
        CountryEntity savedCountry = countryRepository.save(countryEntity);
        return CountryMapper.toDTO(savedCountry);
    }

    @Override
    public CountryDTO update(String countryId, CountryDTO countryDTO) {
        return countryRepository.findById(countryId)
                .map(existingCountry -> {
                    RegionEntity regionEntity = regionRepository.findById(countryDTO.getRegionId())
                            .orElseThrow(() -> new EntityNotFoundException("Region not found with id " + countryDTO.getRegionId()));
                    CountryEntity updatedCountry = CountryMapper.toEntity(countryDTO, regionEntity);
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

package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.dto.RegionDTO;
import com.filip.dockercompose_showcase.entity.CountryEntity;
import com.filip.dockercompose_showcase.entity.RegionEntity;
import com.filip.dockercompose_showcase.mapper.RegionMapper;
import com.filip.dockercompose_showcase.repository.RegionRepository;
import com.filip.dockercompose_showcase.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RegionServiceImpl implements RegionService {

    private final RegionRepository regionRepository;

    @Autowired
    public RegionServiceImpl(RegionRepository regionRepository) {
        this.regionRepository = regionRepository;
    }

    @Override
    public List<RegionDTO> findAll() {
        return regionRepository.findAll()
                .stream()
                .map(RegionMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<RegionDTO> findById(String regionId) {

        return regionRepository.findById(regionId)
                .map(RegionMapper::toDTO);
    }

    @Override
    public RegionDTO save(RegionDTO regionDTO) {
        RegionEntity regionEntity = RegionMapper.toEntity(regionDTO);
        for (CountryEntity country : regionEntity.getCountries()) {
            country.setRegionEntity(regionEntity);
        }
        RegionEntity savedRegion = regionRepository.save(regionEntity);

        return RegionMapper.toDTO(savedRegion);
    }

    @Override
    public RegionDTO update(String regionId, RegionDTO regionDTO) {
        return regionRepository.findById(regionId)
                .map(existingRegion -> {
                    RegionEntity updatedRegion = RegionMapper.toEntity(regionDTO);
                    updatedRegion.setRegionId(existingRegion.getRegionId());
                    for (CountryEntity country : updatedRegion.getCountries()) {
                        country.setRegionEntity(updatedRegion);
                    }
                    RegionEntity savedRegion = regionRepository.save(updatedRegion);
                    return RegionMapper.toDTO(savedRegion);
                })
                .orElseThrow(() -> new RuntimeException("Region not found with id " + regionId));
    }

    @Override
    public void deleteById(String regionId) {
        regionRepository.deleteById(regionId);
    }
}

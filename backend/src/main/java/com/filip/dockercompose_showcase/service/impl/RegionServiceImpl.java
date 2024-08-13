package com.filip.dockercompose_showcase.service.impl;

import com.filip.dockercompose_showcase.entity.RegionEntity;
import com.filip.dockercompose_showcase.repository.RegionRepository;
import com.filip.dockercompose_showcase.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegionServiceImpl implements RegionService {

    private final RegionRepository regionRepository;

    @Autowired
    public RegionServiceImpl(RegionRepository regionRepository) {
        this.regionRepository = regionRepository;
    }

    @Override
    public List<RegionEntity> findAll() {
        return regionRepository.findAll();
    }

    @Override
    public Optional<RegionEntity> findById(String regionId) {
        return regionRepository.findById(regionId);
    }

    @Override
    public RegionEntity save(RegionEntity region) {
        return regionRepository.save(region);
    }

    @Override
    public RegionEntity update(String regionId, RegionEntity region) {
        return regionRepository.findById(regionId)
                .map(existingRegion -> {
                    existingRegion.setName(region.getName());
                    return regionRepository.save(existingRegion);
                })
                .orElseThrow(() -> new RuntimeException("Region not found with id " + regionId));
    }

    @Override
    public void deleteById(String regionId) {
        regionRepository.deleteById(regionId);
    }
}

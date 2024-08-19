package com.filip.dockercompose_showcase.controller;

import com.filip.dockercompose_showcase.dto.RegionDTO;
import com.filip.dockercompose_showcase.entity.RegionEntity;
import com.filip.dockercompose_showcase.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/regions")
public class RegionController {

    private final RegionService regionService;

    @Autowired
    public RegionController(RegionService regionService) {
        this.regionService = regionService;
    }

    @GetMapping
    public List<RegionDTO> getAllRegions() {
        return regionService.findAll();
    }

    @GetMapping("/{regionId}")
    public ResponseEntity<RegionDTO> getRegionById(@PathVariable String regionId) {
        return regionService.findById(regionId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RegionDTO createRegion(@RequestBody RegionDTO regionDTO) {
        return regionService.save(regionDTO);
    }

    @PutMapping("/{regionId}")
    public ResponseEntity<RegionDTO> updateRegion(@PathVariable String regionId, @RequestBody RegionDTO regionDTO) {
        return ResponseEntity.ok(regionService.update(regionId, regionDTO));
    }

    @DeleteMapping("/{regionId}")
    public ResponseEntity<Void> deleteRegion(@PathVariable String regionId) {
        regionService.deleteById(regionId);
        return ResponseEntity.noContent().build();
    }
}

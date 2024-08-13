package com.filip.dockercompose_showcase.controller;

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
    public List<RegionEntity> getAllRegions() {
        return regionService.findAll();
    }

    @GetMapping("/{regionId}")
    public ResponseEntity<RegionEntity> getRegionById(@PathVariable String regionId) {
        return regionService.findById(regionId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RegionEntity createRegion(@RequestBody RegionEntity region) {
        return regionService.save(region);
    }

    @PutMapping("/{regionId}")
    public ResponseEntity<RegionEntity> updateRegion(@PathVariable String regionId, @RequestBody RegionEntity region) {
        return ResponseEntity.ok(regionService.update(regionId, region));
    }

    @DeleteMapping("/{regionId}")
    public ResponseEntity<Void> deleteRegion(@PathVariable String regionId) {
        regionService.deleteById(regionId);
        return ResponseEntity.noContent().build();
    }
}

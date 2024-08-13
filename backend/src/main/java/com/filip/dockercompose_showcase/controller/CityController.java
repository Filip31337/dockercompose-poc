package com.filip.dockercompose_showcase.controller;

import com.filip.dockercompose_showcase.entity.CityEntity;
import com.filip.dockercompose_showcase.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
public class CityController {

    private final CityService cityService;

    @Autowired
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping
    public List<CityEntity> getAllCities() {
        return cityService.findAll();
    }

    @GetMapping("/{cityId}")
    public ResponseEntity<CityEntity> getCityById(@PathVariable String cityId) {
        return cityService.findById(cityId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CityEntity createCity(@RequestBody CityEntity city) {
        return cityService.save(city);
    }

    @PutMapping("/{cityId}")
    public ResponseEntity<CityEntity> updateCity(@PathVariable String cityId, @RequestBody CityEntity city) {
        return ResponseEntity.ok(cityService.update(cityId, city));
    }

    @DeleteMapping("/{cityId}")
    public ResponseEntity<Void> deleteCity(@PathVariable String cityId) {
        cityService.deleteById(cityId);
        return ResponseEntity.noContent().build();
    }
}

package com.filip.dockercompose_showcase.controller;

import com.filip.dockercompose_showcase.dto.CityDTO;
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
    public List<CityDTO> getAllCities() {
        return cityService.findAll();
    }

    @GetMapping("/{cityId}")
    public ResponseEntity<CityDTO> getCityById(@PathVariable String cityId) {
        return cityService.findById(cityId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CityDTO createCity(@RequestBody CityDTO city) {
        return cityService.save(city);
    }

    @PutMapping("/{cityId}")
    public ResponseEntity<CityDTO> updateCity(@PathVariable String cityId, @RequestBody CityDTO city) {
        return ResponseEntity.ok(cityService.update(cityId, city));
    }

    @DeleteMapping("/{cityId}")
    public ResponseEntity<Void> deleteCity(@PathVariable String cityId) {
        cityService.deleteById(cityId);
        return ResponseEntity.noContent().build();
    }
}

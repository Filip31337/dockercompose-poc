package com.filip.dockercompose_showcase.controller;

import com.filip.dockercompose_showcase.entity.CountryEntity;
import com.filip.dockercompose_showcase.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping
    public List<CountryEntity> getAllCountries() {
        return countryService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CountryEntity> getCountryById(@PathVariable String id) {
        Optional<CountryEntity> country = countryService.findById(id);
        return country.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public CountryEntity createCountry(@RequestBody CountryEntity countryEntity) {
        return countryService.save(countryEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CountryEntity> updateCountry(@PathVariable String id, @RequestBody CountryEntity countryEntity) {
        if (!countryService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        countryEntity.setCountryId(id);
        return ResponseEntity.ok(countryService.save(countryEntity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCountry(@PathVariable String id) {
        if (!countryService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        countryService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

package com.filip.dockercompose_showcase.controller;

import com.filip.dockercompose_showcase.dto.CountryDTO;
import com.filip.dockercompose_showcase.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/all")
    public List<CountryDTO> getAllCountries() {
        return countryService.findAll();
    }

    @GetMapping("/paginated")
    public Page<CountryDTO> getAllCountriesPaginated(@RequestParam int page, @RequestParam int pageSize) {
        return countryService.findAllPaginated(page, pageSize);
    }

    @GetMapping("/paginated/filtered")
    public Page<CountryDTO> getAllCountriesPaginated(
            @RequestParam int page,
            @RequestParam int pageSize,
            @RequestParam String globalFilter
    ) {
        return countryService.findAllPaginated(page, pageSize, globalFilter);
    }

    @GetMapping("/paginated/filtered/sorted")
    public Page<CountryDTO> getAllCountriesPaginatedSorted(
            @RequestParam int page,
            @RequestParam int pageSize,
            @RequestParam String globalFilter,
            @RequestParam String sort
    ) {
        return countryService.findAllPaginatedSorted(page, pageSize, globalFilter, sort);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CountryDTO> getCountryById(@PathVariable String id) {
        Optional<CountryDTO> country = countryService.findById(id);
        return country.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public CountryDTO createCountry(@RequestBody CountryDTO countryEntity) {
        return countryService.save(countryEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CountryDTO> updateCountry(@PathVariable String id, @RequestBody CountryDTO countryDTO) {
        if (!countryService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        countryDTO.setCountryId(id);
        return ResponseEntity.ok(countryService.save(countryDTO));
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

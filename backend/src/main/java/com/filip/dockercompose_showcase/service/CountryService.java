package com.filip.dockercompose_showcase.service;

import com.filip.dockercompose_showcase.dto.CountryDTO;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<CountryDTO> findAll();
    Page<CountryDTO> findAllPaginated(int page, int pageSize);
    Page<CountryDTO> findAllPaginated(int page, int pageSize, String globalFilter);
    Page<CountryDTO> findAllPaginatedSorted(int page, int pageSize, String globalFilter, String sort);
    Optional<CountryDTO> findById(String countryId);
    CountryDTO save(CountryDTO countryDTO);
    CountryDTO update(String countryId, CountryDTO countryDTO);
    void deleteById(String countryId);
}

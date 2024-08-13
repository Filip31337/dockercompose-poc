package com.filip.dockercompose_showcase.repository;

import com.filip.dockercompose_showcase.entity.CurrencyCountry;
import com.filip.dockercompose_showcase.entity.CurrencyCountryId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyCountryRepository extends JpaRepository<CurrencyCountry, CurrencyCountryId> {
}

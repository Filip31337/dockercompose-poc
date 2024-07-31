package com.filip.dockercompose_showcase.repository;

import com.filip.dockercompose_showcase.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, String> {
}

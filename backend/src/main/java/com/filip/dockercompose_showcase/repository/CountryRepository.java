package com.filip.dockercompose_showcase.repository;

import com.filip.dockercompose_showcase.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<CountryEntity, String> {
}

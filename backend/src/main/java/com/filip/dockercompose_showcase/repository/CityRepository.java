package com.filip.dockercompose_showcase.repository;

import com.filip.dockercompose_showcase.entity.CityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<CityEntity, String> {
}

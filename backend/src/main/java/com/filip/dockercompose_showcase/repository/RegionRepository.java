package com.filip.dockercompose_showcase.repository;

import com.filip.dockercompose_showcase.entity.RegionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<RegionEntity, String> {
}

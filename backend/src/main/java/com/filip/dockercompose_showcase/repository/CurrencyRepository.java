package com.filip.dockercompose_showcase.repository;

import com.filip.dockercompose_showcase.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, String> {
}

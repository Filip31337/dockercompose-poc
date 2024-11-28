package com.filip.dockercompose_showcase.repository;

import com.filip.dockercompose_showcase.entity.CountryEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CountryRepository extends JpaRepository<CountryEntity, String> {

    @Query(value = """
    SELECT * FROM countries c
    WHERE (c.name IS NOT NULL AND LOWER(c.name) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
       OR (c.official_name IS NOT NULL AND LOWER(c.official_name) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
       OR (c.country_code IS NOT NULL AND LOWER(c.country_code) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
       OR (c.timezone IS NOT NULL AND LOWER(c.timezone) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
       OR (c.population IS NOT NULL AND TO_CHAR(c.population) LIKE CONCAT('%', :globalFilter, '%'))
       OR (c.area_sq_km IS NOT NULL AND TO_CHAR(c.area_sq_km) LIKE CONCAT('%', :globalFilter, '%'))
    """,
            countQuery = """
       SELECT COUNT(*) FROM countries c
       WHERE (c.name IS NOT NULL AND LOWER(c.name) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
          OR (c.official_name IS NOT NULL AND LOWER(c.official_name) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
          OR (c.country_code IS NOT NULL AND LOWER(c.country_code) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
          OR (c.timezone IS NOT NULL AND LOWER(c.timezone) LIKE LOWER(CONCAT('%', :globalFilter, '%')))
          OR (c.population IS NOT NULL AND TO_CHAR(c.population) LIKE CONCAT('%', :globalFilter, '%'))
          OR (c.area_sq_km IS NOT NULL AND TO_CHAR(c.area_sq_km) LIKE CONCAT('%', :globalFilter, '%'))
    """,
            nativeQuery = true)
    Page<CountryEntity> findByGlobalFilter(@Param("globalFilter") String globalFilter, Pageable pageable);

    @Query(value = """
    SELECT * FROM countries c
    WHERE LOWER(c.name) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
       OR LOWER(c.official_name) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
       OR LOWER(c.country_code) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
       OR LOWER(c.timezone) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
       OR TO_CHAR(c.population) LIKE CONCAT('%', :globalFilter, '%')
       OR TO_CHAR(c.area_sq_km) LIKE CONCAT('%', :globalFilter, '%')
    """,
            countQuery = """
       SELECT COUNT(*) FROM countries c
       WHERE LOWER(c.name) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
          OR LOWER(c.official_name) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
          OR LOWER(c.country_code) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
          OR LOWER(c.timezone) LIKE LOWER(CONCAT('%', :globalFilter, '%'))
          OR TO_CHAR(c.population) LIKE CONCAT('%', :globalFilter, '%')
          OR TO_CHAR(c.area_sq_km) LIKE CONCAT('%', :globalFilter, '%')
    """,
            nativeQuery = true)
    Page<CountryEntity> findByGlobalFilterSorted(@Param("globalFilter") String globalFilter, Pageable pageable);

}

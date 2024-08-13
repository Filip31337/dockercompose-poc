package com.filip.dockercompose_showcase.entity;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "regions")
public class RegionEntity {

    @Id
    @Column(name = "region_id", length = 2, nullable = false)
    private String regionId;

    @Column(name = "name", length = 13, nullable = false)
    private String name;

    @OneToMany(mappedBy = "regionEntity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<CountryEntity> countries = new HashSet<>();

    public String getRegionId() {
        return regionId;
    }

    public void setRegionId(String regionId) {
        this.regionId = regionId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<CountryEntity> getCountries() {
        return countries;
    }

    public void setCountries(Set<CountryEntity> countries) {
        this.countries = countries;
    }
}

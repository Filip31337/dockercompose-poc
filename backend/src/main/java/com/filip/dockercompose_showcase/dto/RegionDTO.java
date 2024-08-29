package com.filip.dockercompose_showcase.dto;

import java.util.List;

public class RegionDTO {
    private String regionId;
    private String name;
    private List<CountryDTO> countries;

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

    public List<CountryDTO> getCountries() {
        return countries;
    }

    public void setCountries(List<CountryDTO> countries) {
        this.countries = countries;
    }

    @Override
    public String toString() {
        return "RegionDTO{" +
                "regionId='" + regionId + '\'' +
                ", name='" + name + '\'' +
                ", countries=" + countries +
                '}';
    }
}

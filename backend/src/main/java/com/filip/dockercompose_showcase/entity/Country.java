package com.filip.dockercompose_showcase.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "countries")
public class Country {
    @Id
    @Column(name = "country_id", length = 3, nullable = false)
    private String countryId;

    @Column(name = "country_code", length = 2, nullable = false)
    private String countryCode;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "official_name", length = 200)
    private String officialName;

    @Column(name = "population")
    private Long population;

    @Column(name = "area_sq_km")
    private Double areaSqKm;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "timezone", length = 40)
    private String timezone;

    @Column(name = "region_id", length = 2, nullable = false)
    private String regionId;

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOfficialName() {
        return officialName;
    }

    public void setOfficialName(String officialName) {
        this.officialName = officialName;
    }

    public Long getPopulation() {
        return population;
    }

    public void setPopulation(Long population) {
        this.population = population;
    }

    public Double getAreaSqKm() {
        return areaSqKm;
    }

    public void setAreaSqKm(Double areaSqKm) {
        this.areaSqKm = areaSqKm;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public String getRegionId() {
        return regionId;
    }

    public void setRegionId(String regionId) {
        this.regionId = regionId;
    }
}

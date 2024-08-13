package com.filip.dockercompose_showcase.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "cities")
public class CityEntity {

    @Id
    @Column(name = "city_id", length = 7, nullable = false)
    private String cityId;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "official_name", length = 200)
    private String officialName;

    @Column(name = "population")
    private Long population;

    @Column(name = "is_capital", length = 1, nullable = false)
    private char isCapital = 'N';

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "timezone", length = 40)
    private String timezone;

    @ManyToOne
    @JoinColumn(name = "country_id", nullable = false)
    private CountryEntity countryEntity;

    public String getCityId() {
        return cityId;
    }

    public void setCityId(String cityId) {
        this.cityId = cityId;
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

    public char getIsCapital() {
        return isCapital;
    }

    public void setIsCapital(char isCapital) {
        this.isCapital = isCapital;
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

    public CountryEntity getCountry() {
        return countryEntity;
    }

    public void setCountry(CountryEntity countryEntity) {
        this.countryEntity = countryEntity;
    }
}

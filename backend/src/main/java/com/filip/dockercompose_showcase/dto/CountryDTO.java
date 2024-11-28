package com.filip.dockercompose_showcase.dto;

public class CountryDTO {
    private String countryId;
    private String country_code;
    private String name;
    private String official_name;
    private Long population;
    private Double area_sq_km;
    private Double latitude;
    private Double longitude;
    private String timezone;
    private String regionId;

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }

    public String getCountry_code() {
        return country_code;
    }

    public void setCountry_code(String country_code) {
        this.country_code = country_code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOfficial_name() {
        return official_name;
    }

    public void setOfficial_name(String official_name) {
        this.official_name = official_name;
    }

    public Long getPopulation() {
        return population;
    }

    public void setPopulation(Long population) {
        this.population = population;
    }

    public Double getArea_sq_km() {
        return area_sq_km;
    }

    public void setArea_sq_km(Double area_sq_km) {
        this.area_sq_km = area_sq_km;
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

    @Override
    public String toString() {
        return "CountryDTO{" +
                "countryId='" + countryId + '\'' +
                ", countryCode='" + country_code + '\'' +
                ", name='" + name + '\'' +
                ", officialName='" + official_name + '\'' +
                ", population=" + population +
                ", areaSqKm=" + area_sq_km +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", timezone='" + timezone + '\'' +
                ", regionId='" + regionId + '\'' +
                '}';
    }
}

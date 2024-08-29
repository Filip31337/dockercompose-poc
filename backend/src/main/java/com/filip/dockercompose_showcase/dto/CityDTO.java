package com.filip.dockercompose_showcase.dto;

public class CityDTO {
    private String cityId;
    private String name;
    private Long population;
    private Boolean isCapital;
    private String countryId;

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

    public Long getPopulation() {
        return population;
    }

    public void setPopulation(Long population) {
        this.population = population;
    }

    public Boolean getIsCapital() {
        return isCapital;
    }

    public void setIsCapital(Boolean capital) {
        isCapital = capital;
    }

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }

    @Override
    public String toString() {
        return "CityDTO{" +
                "cityId='" + cityId + '\'' +
                ", name='" + name + '\'' +
                ", population=" + population +
                ", isCapital=" + isCapital +
                ", countryId='" + countryId + '\'' +
                '}';
    }
}

package com.filip.dockercompose_showcase.entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "currencies_countries")
@IdClass(CurrencyCountryId.class)
public class CurrencyCountry implements Serializable {

    @Id
    @ManyToOne
    @JoinColumn(name = "currency_id", nullable = false)
    private CurrencyEntity currencyEntity;

    @Id
    @ManyToOne
    @JoinColumn(name = "country_id", nullable = false)
    private CountryEntity countryEntity;

    public CurrencyEntity getCurrency() {
        return currencyEntity;
    }

    public void setCurrency(CurrencyEntity currencyEntity) {
        this.currencyEntity = currencyEntity;
    }

    public CountryEntity getCountry() {
        return countryEntity;
    }

    public void setCountry(CountryEntity countryEntity) {
        this.countryEntity = countryEntity;
    }
}

package com.filip.dockercompose_showcase.entity;

import java.io.Serializable;
import java.util.Objects;

public class CurrencyCountryId implements Serializable {

    private String currencyEntity;
    private String countryEntity;

    public CurrencyCountryId() {
    }

    public CurrencyCountryId(String currencyEntity, String countryEntity) {
        this.currencyEntity = currencyEntity;
        this.countryEntity = countryEntity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CurrencyCountryId that = (CurrencyCountryId) o;
        return Objects.equals(currencyEntity, that.currencyEntity) &&
                Objects.equals(countryEntity, that.countryEntity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(currencyEntity, countryEntity);
    }
}

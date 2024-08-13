package com.filip.dockercompose_showcase.entity;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "currencies")
public class CurrencyEntity {

    @Id
    @Column(name = "currency_id", length = 3, nullable = false)
    private String currencyId;

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Column(name = "official_name", length = 200)
    private String officialName;

    @Column(name = "symbol", length = 18, nullable = false)
    private String symbol;

    @OneToMany(mappedBy = "currencyEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CurrencyCountry> currencyCountries = new HashSet<>();

    public String getCurrencyId() {
        return currencyId;
    }

    public void setCurrencyId(String currencyId) {
        this.currencyId = currencyId;
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

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public Set<CurrencyCountry> getCurrencyCountries() {
        return currencyCountries;
    }

    public void setCurrencyCountries(Set<CurrencyCountry> currencyCountries) {
        this.currencyCountries = currencyCountries;
    }
}

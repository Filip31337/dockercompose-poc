import axios from 'axios';
import { CityFormData, CountryFormData, CurrencyFormData, RegionFormData } from './types/schemas';

const isDevelopment = process.env.NODE_ENV === 'development';

const api = axios.create({
    baseURL: isDevelopment
      ? 'https://localhost:8443/api'  // Localhost URL during development
      : process.env.REACT_APP_API_URL || 'https://localhost:8443/api', // Use env variable or fallback in production
});

// Countries API
export const getCountries = () => api.get<Country[]>('/countries');
export const getCountryById = (id: string) => api.get<Country>(`/countries/${id}`);
export const createCountry = (country: CountryFormData) => api.post('/countries', country);
export const updateCountry = (id: string, country: CountryFormData) => api.put(`/countries/${id}`, country);
export const deleteCountry = (id: string) => api.delete(`/countries/${id}`);

export interface Country {
    countryId: string;
    countryCode: string;
    name: string;
    officialName?: string;
    population?: number;
    areaSqKm?: number;
    latitude?: number;
    longitude?: number;
    timezone?: string;
    regionId: string;
}

// Regions API
export const getRegions = () => api.get<Region[]>(`/regions`);
export const getRegionById = (id: string) => api.get<Region>(`/regions/${id}`);
export const createRegion = (region: RegionFormData) => api.post(`/regions`, region);
export const updateRegion = (id: string, region: RegionFormData) => api.put(`/regions/${id}`, region);
export const deleteRegion = (id: string) => api.delete(`/regions/${id}`);

export interface Region {
    regionId: string;
    name: string;
    countries?: CountryFormData[];
}

// Currencies API
export const getCurrencies = () => api.get<Currency[]>(`/currencies`);
export const getCurrencyById = (id: string) => api.get<Currency>(`/currencies/${id}`);
export const createCurrency = (currency: CurrencyFormData) => api.post(`/currencies`, currency);
export const updateCurrency = (id: string, currency: CurrencyFormData) => api.put(`/currencies/${id}`, currency);
export const deleteCurrency = (id: string) => api.delete(`/currencies/${id}`);

export interface Currency {
    currencyId: string;
    name: string;
    officialName?: string;
    symbol: string;
}

// Cities API
export const getCities = () => api.get<City[]>('/cities');
export const getCityById = (id: string) => api.get<City>(`/cities/${id}`);
export const createCity = (city: CityFormData) => api.post(`/cities`, city);
export const updateCity = (id: string, city: CityFormData) => api.put(`/cities/${id}`, city);
export const deleteCity = (id: string) => api.delete(`/cities/${id}`);

export interface City {
    cityId: string;
    name: string;
    officialName?: string;
    population?: number;
    isCapital: boolean;
    latitude?: number;
    longitude?: number;
    timezone?: string;
    countryId: string;
}

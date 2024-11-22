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

// dev mock
/*const MockCountries = {
    promise: Promise.resolve([
        {
            countryId: "XKX",
            countryCode: "XK",
            name: "Kosovo",
            officialName: "Republic of Kosovo",
            population: 1908000,
            areaSqKm: 10887.0,
            latitude: 42.58333,
            longitude: 20.91667,
            timezone: "Europe/Belgrade",
            regionId: "EU",
        },
        {
            countryId: "YEM",
            countryCode: "YE",
            name: "Yemen",
            officialName: "Republic of Yemen",
            population: 28667000,
            areaSqKm: 527968.0,
            latitude: 15.5,
            longitude: 47.5,
            timezone: "Asia/Aden",
            regionId: "AS",
        },
        {
            countryId: "ZAF",
            countryCode: "ZA",
            name: "South Africa",
            officialName: "Republic of South Africa",
            population: 55380000,
            areaSqKm: 1219090.0,
            latitude: -29.0,
            longitude: 24.0,
            timezone: "Africa/Johannesburg",
            regionId: "AF",
        },
        {
            countryId: "ZMB",
            countryCode: "ZM",
            name: "Zambia",
            officialName: "Republic of Zambia",
            population: 16445000,
            areaSqKm: 752618.0,
            latitude: -14.33333,
            longitude: 28.5,
            timezone: "Africa/Lusaka",
            regionId: "AF",
        },
        {
            countryId: "ZWE",
            countryCode: "ZW",
            name: "Zimbabwe",
            officialName: "Republic of Zimbabwe",
            population: 14030000,
            areaSqKm: 390757.0,
            latitude: -19.0,
            longitude: 29.75,
            timezone: "Africa/Harare",
            regionId: "AF",
        },
        {
            countryId: "AND",
            countryCode: "AD",
            name: "Andorra",
            officialName: "Principality of Andorra",
            population: 86000,
            areaSqKm: 468.0,
            latitude: 42.55,
            longitude: 1.58333,
            timezone: "Europe/Andorra",
            regionId: "EU",
        },
        {
            countryId: "ARE",
            countryCode: "AE",
            name: "United Arab Emirates",
            officialName: null,
            population: 9701000,
            areaSqKm: 83600.0,
            latitude: 23.75,
            longitude: 54.5,
            timezone: "Asia/Dubai",
            regionId: "AS",
        },
        {
            countryId: "AFG",
            countryCode: "AF",
            name: "Afghanistan",
            officialName: "Islamic Republic of Afghanistan",
            population: 34941000,
            areaSqKm: 652230.0,
            latitude: 33.0,
            longitude: 66.0,
            timezone: "Asia/Kabul",
            regionId: "AS",
        },
        {
            countryId: "ATG",
            countryCode: "AG",
            name: "Antigua and Barbuda",
            officialName: null,
            population: 96000,
            areaSqKm: 443.0,
            latitude: 17.05,
            longitude: -61.8,
            timezone: "America/Antigua",
            regionId: "NA",
        },
        {
            countryId: "ALB",
            countryCode: "AL",
            name: "Albania",
            officialName: "Republic of Albania",
            population: 3057000,
            areaSqKm: 28748.0,
            latitude: 41.0,
            longitude: 20.0,
            timezone: "Europe/Tirane",
            regionId: "EU",
        },
        {
            countryId: "BLA",
            countryCode: "BLA",
            name: "Filip",
            officialName: "Republic of Filip",
            population: 4057000,
            areaSqKm: 18748.0,
            latitude: 13.0,
            longitude: 30.0,
            timezone: "Europe/Tirane",
            regionId: "EU",
        },
    ]),
};

export const getCountries = () => {
    return MockCountries.promise;
};*/

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

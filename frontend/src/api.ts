import axios from 'axios';

const api = axios.create({
    //baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
    baseURL: 'http://localhost:8080/api',
});

export const getCountries = () => api.get<Country[]>('/countries');
export const getCountryById = async (id: any) => {
    const {data} = await api.get<Country>(`/countries/${id}`);
    return data;
};
export const createCountry = (country: Country) => api.post<Country>('/countries', country);
export const updateCountry = (id: string, country: Country) => api.put<Country>(`/countries/${id}`, country);
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

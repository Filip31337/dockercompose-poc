import axios from 'axios';

const api = axios.create({
    //baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
    baseURL: 'http://localhost:8080/api',
});

export const getCountries = () => api.get('/countries');
//export const getCountryById = (id: string) => axios.get<Country>(`/countries/${id}`);
export const getCountryById = async (id: any) => {
    const {data} = await axios.get(`/countries/${id}`);
    return data;
};
export const createCountry = (country: Country) => axios.post<Country>('/countries', country);
export const updateCountry = (id: string, country: Country) => axios.put<Country>(`/countries/${id}`, country);
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

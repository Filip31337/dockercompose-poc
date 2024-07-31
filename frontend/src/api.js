var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const api = axios.create({
    //baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
    baseURL: 'http://localhost:8080/api',
});
export const getCountries = () => api.get('/countries');
//export const getCountryById = (id: string) => axios.get<Country>(`/countries/${id}`);
export const getCountryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get(`/countries/${id}`);
    return data;
});
export const createCountry = (country) => axios.post('/countries', country);
export const updateCountry = (id, country) => axios.put(`/countries/${id}`, country);
export const deleteCountry = (id) => api.delete(`/countries/${id}`);

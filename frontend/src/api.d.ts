export declare const getCountries: () => Promise<import("axios").AxiosResponse<any, any>>;
export declare const getCountryById: (id: any) => Promise<any>;
export declare const createCountry: (country: Country) => Promise<import("axios").AxiosResponse<Country, any>>;
export declare const updateCountry: (id: string, country: Country) => Promise<import("axios").AxiosResponse<Country, any>>;
export declare const deleteCountry: (id: string) => Promise<import("axios").AxiosResponse<any, any>>;
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

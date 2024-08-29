import { z } from "zod";

// Schema for Currency
export const currencySchema = z.object({
  currencyId: z.string().min(1, "Currency ID is required"),
  name: z.string().min(1, "Name is required"),
  officialName: z.string().optional(),
  symbol: z.string().min(1, "Symbol is required"),
});

export type CurrencyFormData = z.infer<typeof currencySchema>;

// Schema for City
export const citySchema = z.object({
  cityId: z.string().min(1, "City ID is required"),
  name: z.string().min(1, "Name is required"),
  officialName: z.string().optional(),
  population: z.coerce.number().optional(),
  isCapital: z.boolean().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  timezone: z.string().optional(),
  countryId: z.string().min(1, "Country ID is required"),
});

export type CityFormData = z.infer<typeof citySchema>;

// Schema for Country (Refactored)
export const countrySchema = z.object({
  countryId: z.string().min(1, "Country ID is required"),
  countryCode: z.string().min(1, "Country Code is required"),
  name: z.string().min(1, "Name is required"),
  officialName: z.string().optional(),
  population: z.coerce.number().optional(),
  areaSqKm: z.coerce.number().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  timezone: z.string().optional(),
  regionId: z.string().min(1, "Region ID is required"),
});

// Schema for Region
export const regionSchema = z.object({
  regionId: z.string().min(1, "Region ID is required"),
  name: z.string().min(1, "Name is required"),
  countries: z.array(countrySchema).optional(),
});

export type RegionFormData = z.infer<typeof regionSchema>;

export type CountryFormData = z.infer<typeof countrySchema>;

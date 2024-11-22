// dev mock
import { Country } from '@/api'

const mockedCountryArray = [
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
];

const MockCountries = {
  promise: Promise.resolve({
    data: mockedCountryArray
  }),
};

const getCountriesMock = () => {
  return MockCountries.promise;
};

const getCountryMock = (countryId: string) => {
  const mockedCountry = mockedCountryArray.find((country) => country.countryId === countryId) as Country;
  const mockCountry = {
    promise: Promise.resolve({
      data: mockedCountry
    })
  }
  return mockCountry.promise;
}

function deleteCountryMock(id: string) {
  mockedCountryArray.filter(
    (country) => country.countryId !== id
  );
  const mockDeletedCountry = {
    promise: Promise.resolve({
      data: id,
      status: 200,
      statusText: 'DELETED'
    })
  }
  return mockDeletedCountry.promise;
}

const mockedApi = {
  getCountriesMock,
  getCountryMock,
  deleteCountryMock,
};

export default mockedApi;

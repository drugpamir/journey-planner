import { createAsyncThunk } from "@reduxjs/toolkit";

import { City } from "../models/City";
import { cityStorageApi } from "../api/storageApi";
import { cityInfoApi } from "../utils/config";

export const fetchCityInfo = createAsyncThunk(
  "cities/info",
  async (cityName: string) => {
    const city: Omit<City, "id"> = await cityInfoApi.fetchInfo(cityName);
    // thunkAPI.dispatch(addCityToStorage({ ...city }));
    return city;
  },
);

export const getStorageCities = createAsyncThunk(
  "cities/added",
  async (/*data, thunkAPI*/) => {
    const response = await cityStorageApi.getCities();
    return response;
  },
);

export const addCityToStorage = createAsyncThunk(
  "cities/create",
  async (cityParams: Omit<City, "id">) => {
    const response = await cityStorageApi.addCity(cityParams);
    return response;
  },
);

export const removeCityFromStorage = createAsyncThunk(
  "cities/remove",
  async (city: City) => {
    if (city) {
      const response = await cityStorageApi.removeCity(city.path);
      return response;
    }
  },
);

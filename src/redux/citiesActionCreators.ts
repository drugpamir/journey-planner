import { createAsyncThunk } from "@reduxjs/toolkit";

import { City } from "../models/City";
import { cityStorageApi } from "../api/storageApi";
import { cityInfoApi } from "../utils/config";

export const fetchCityInfo = createAsyncThunk(
  "cities/info",
  async (cityName: string /*, thunkAPI*/) => {
    const city: City = await cityInfoApi.fetchInfo(cityName);
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
  async (cityParams: Omit<City, "id"> /*, thunkAPI*/) => {
    const response = await cityStorageApi.addCity(cityParams);
    return response;
  },
);

export const removeCityFromStorage = createAsyncThunk(
  "cities/remove",
  async (city: City /*, thunkAPI*/) => {
    const response = await cityStorageApi.removeCity(city.id);
    return response;
  },
);

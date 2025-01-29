import { createAsyncThunk } from "@reduxjs/toolkit";
import { City } from "../models/City";
import { cityStorageApi } from "../api/storageApi";
import { cityInfoOpenApi } from "../api/cityInfoApi";

export const fetchCityInfo = createAsyncThunk(
  "cities/info",
  async (cityName: string /*, thunkAPI*/) => {
    const city: City = await cityInfoOpenApi.fetchInfo(cityName);
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { City } from "../models/City";
import { fetchCityInfo } from "../api/cityInfoApi";

export const getAllCityInfo = createAsyncThunk(
  "cities/info",
  async (cityName: string) => {
    const city: City = await fetchCityInfo(cityName);
    console.log(city);
    return city;
  },
);

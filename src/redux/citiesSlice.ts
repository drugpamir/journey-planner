import { createSlice } from "@reduxjs/toolkit";

import { City, CityByDefault } from "../models/City";
import {
  addCityToStorage,
  getStorageCities,
  fetchCityInfo,
  removeCityFromStorage,
} from "./citiesActionCreators";

type CitiesState = {
  addingCity: City;
  cities: City[];
  isLoading: boolean;
  error: string;
};

const initialState: CitiesState = {
  addingCity: CityByDefault,
  cities: [],
  isLoading: false,
  error: "",
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCityInfo.fulfilled, (state, action) => {
        state.addingCity = action.payload;
      })
      .addCase(getStorageCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(addCityToStorage.fulfilled, (state, action) => {
        state.cities.push(action.payload);
        state.isLoading = false;
        state.error = "";
      })
      .addCase(removeCityFromStorage.fulfilled, (state, action) => {
        state.cities = state.cities.filter(
          (city) => city.id !== action.meta.arg.id,
        );
        state.isLoading = false;
        state.error = "";
      })
      .addDefaultCase(() => {});
  },
});

export default citiesSlice.reducer;

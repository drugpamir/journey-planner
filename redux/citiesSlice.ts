import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { City, CityByDefault } from "../models/City";
import {
  fetchCityInfo,
  addCityToStorage,
  getStorageCities,
  removeCityFromStorage,
} from "./citiesActionCreators";

type CitiesState = {
  currentCity: City;
  cities: City[];
  isLoading: boolean;
  error: string;
};

const initialState: CitiesState = {
  currentCity: CityByDefault,
  cities: [],
  isLoading: false,
  error: "",
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCityReducer(state, action: PayloadAction<City>) {
      state.currentCity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCityInfo.fulfilled, (state, action) => {
        state.currentCity = action.payload;
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
          (city) => city && city.id !== action.meta.arg?.id,
        );
        state.isLoading = false;
        state.error = "";
      })
      .addDefaultCase(() => {});
  },
});

export const citiesSelector = createSelector(
  [(state: CitiesState) => state.cities],
  (cities) => cities,
);

export const { setCityReducer } = citiesSlice.actions;

export default citiesSlice.reducer;

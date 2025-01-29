import { createSlice } from "@reduxjs/toolkit";
import { City, CityByDefault } from "../models/City";
import {
  addCityToStorage,
  getStorageCities,
  fetchCityInfo,
} from "./actionCreators";

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
  extraReducers: (builder) => {
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
        console.log("city added to state");
      })
      .addDefaultCase(() => {});
  },
});

export default citiesSlice.reducer;

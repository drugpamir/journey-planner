import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { City } from "../models/City";
import {
  fetchCityInfo,
  addCityToStorage,
  getStorageCities,
  removeCityFromStorage,
} from "./citiesActionCreators";

type CitiesState = {
  currentCity: Omit<City, "id"> | null;
  cities: City[];
  isLoading: boolean;
  error: string;
};

const initialState: CitiesState = {
  currentCity: null,
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
        if (state.currentCity?.path === action.payload?.path) {
          console.log(`city "${action.payload.name}" is already current`);
          return;
        }
        state.currentCity = action.payload;
      })
      .addCase(fetchCityInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = `unknown error during fetching city ${action.meta.arg}`;
        console.log(state.error);
      })

      .addCase(getStorageCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getStorageCities.rejected, (state, action) => {
        state.cities = [];
        state.isLoading = false;
        state.error =
          action.error.message || `unknown error during get storage cities`;
        console.log(state.error);
      })

      .addCase(addCityToStorage.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log("no city to add");
          return;
        }
        if (state.cities.some((city) => city.id === action.payload.id)) {
          console.log(`city "${action.payload.name}" already exists`);
          return;
        }
        console.log(`adding city "${action.payload.name}"`);
        state.cities.push(action.payload);
        state.isLoading = false;
        state.error = "";
      })
      .addCase(addCityToStorage.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message ||
          `unknown error during adding city ${action.meta.arg.name}`;
        console.log(state.error);
      })

      .addCase(removeCityFromStorage.fulfilled, (state, action) => {
        console.log(`removing city "${action.meta.arg.name}"`);
        state.cities = state.cities.filter(
          (city) => city && city.path !== action.meta.arg.path,
        );
        state.isLoading = false;
        state.error = "";
      })
      .addCase(removeCityFromStorage.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message ||
          `unknown error during removing city ${action.meta.arg.name}`;
        console.log(state.error);
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

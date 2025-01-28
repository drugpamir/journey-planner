import { createSlice } from "@reduxjs/toolkit";
import { City } from "../models/City";

type CitiesState = {
  cities: City[];
  isLoading: boolean;
  error: string;
};

const initialState: CitiesState = {
  cities: [],
  isLoading: false,
  error: "",
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addDefaultCase(() => {});
  },
});

export default citiesSlice.reducer;

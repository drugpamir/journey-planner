import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: 1 };

export const mainSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {},
});

export default mainSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { User, UserByDefault } from "../models/User";
import { loginUser, logoutUser, signUpUser } from "./userActionCreators";

type UserState = {
  user: User;
  isLoggedIn: boolean;
};

const initialState: UserState = {
  user: UserByDefault,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload;
      });
  },
});

export default userSlice.reducer;

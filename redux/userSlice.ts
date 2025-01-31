import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    setUserReducer(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
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
      })
      .addDefaultCase(() => {});
  },
});

export const userInfoSelector = createSelector(
  [(state: UserState) => state.user],
  (user) => user,
);

export const userLoggedSelector = createSelector(
  [(state: UserState) => state.isLoggedIn],
  (isLoggedIn) => isLoggedIn,
);

export const { setUserReducer } = userSlice.actions;

export default userSlice.reducer;

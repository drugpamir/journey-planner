import { createAsyncThunk } from "@reduxjs/toolkit";

import { User, UserCredentials } from "../models/User";
import { userApi } from "../utils/config";

export const signUpUser = createAsyncThunk(
  "user/signup",
  async (credentials: UserCredentials) => {
    const user: User = await userApi.signUp(credentials);
    return user;
  },
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials: UserCredentials) => {
    const user: User = await userApi.logIn(credentials);
    return user;
  },
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  const success: boolean = await userApi.logOut();
  return success;
});

import { createAsyncThunk } from "@reduxjs/toolkit";

import { User } from "../models/User";
import { userApi } from "../api/userApi";

export const signUpUser = createAsyncThunk(
  "user/signup",
  async ({ email, password }: { email: string; password: string }) => {
    const user: User = await userApi.signUp(email, password);
    return user;
  },
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const user: User = await userApi.logIn(email, password);
    return user;
  },
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  const success: boolean = await userApi.logOut();
  return success;
});

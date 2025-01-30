import { createAsyncThunk } from "@reduxjs/toolkit";

import { User } from "../models/User";
import { loginApi } from "../api/loginApi";

export const signUpUser = createAsyncThunk(
  "user/signup",
  async ({ email, password }: { email: string; password: string }) => {
    const user: User = await loginApi.signUp(email, password);
    return user;
  },
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const user: User = await loginApi.logIn(email, password);
    return user;
  },
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  const success: boolean = await loginApi.logOut();
  return success;
});

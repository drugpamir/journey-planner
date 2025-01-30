import { User } from "../models/User";
import { LoginApiStub } from "./loginApiStub";

export interface LoginApi {
  signUp(email: string, password: string): Promise<User>;

  logIn(email: string, password: string): Promise<User>;

  logOut(): Promise<boolean>;
}

export const loginApi: LoginApi = new LoginApiStub();

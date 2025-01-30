import { LoginApiStub } from "./loginApiStub";

export type User = {
  email: string;
  name: string;
};

export interface LoginApi {
  signUp(email: string, password: string): Promise<User>;

  logIn(email: string, password: string): Promise<User>;

  logOut(user: string): Promise<boolean>;
}

export const loginApi: LoginApi = new LoginApiStub();

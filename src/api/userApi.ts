import { User } from "../models/User";
import { UserApiStub } from "./userApiStub";

export interface UserApi {
  signUp(email: string, password: string): Promise<User>;

  logIn(email: string, password: string): Promise<User>;

  logOut(): Promise<boolean>;
}

export const userApi: UserApi = new UserApiStub();

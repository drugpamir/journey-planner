import { User, UserCredentials } from "../models/User";

export interface UserApi {
  signUp(credentials: UserCredentials): Promise<User>;

  logIn(credentials: UserCredentials): Promise<User>;

  logOut(): Promise<boolean>;
}

import { UserApi } from "./userApi";
import { User, UserCredentials } from "../models/User";

export class UserApiStub implements UserApi {
  signUp({ email }: UserCredentials): Promise<User> {
    return Promise.resolve({
      id: "user-id",
      email,
      name: "user",
    });
  }

  logIn({ email }: UserCredentials): Promise<User> {
    if (email.includes("otus") || email.includes("admin")) {
      return Promise.resolve({
        id: "user-id",
        email,
        name: "user",
      });
    }
    return Promise.resolve(null);
  }

  logOut(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

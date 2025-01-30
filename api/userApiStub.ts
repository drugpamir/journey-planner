import { UserApi } from "./userApi";
import { User } from "../models/User";

export class UserApiStub implements UserApi {
  signUp(email: string /*, password: string*/): Promise<User> {
    if (email.includes("otus") || email.includes("admin")) {
      return Promise.resolve({
        id: "user-id",
        email,
        name: "user",
      });
    } else {
      return Promise.reject("Invalid credentials");
    }
  }

  logIn(email: string /*, password: string*/): Promise<User> {
    return Promise.resolve({
      id: "user-id",
      email,
      name: "user",
    });
  }

  logOut(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

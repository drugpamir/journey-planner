import { LoginApi, User } from "./loginApi";

export class LoginApiStub implements LoginApi {
  signUp(email: string /*, password: string*/): Promise<User> {
    if (email.includes("otus") || email.includes("admin")) {
      return Promise.resolve({
        email,
        name: "user",
      });
    } else {
      return Promise.reject("Invalid credentials");
    }
  }

  logIn(email: string /*, password: string*/): Promise<User> {
    return Promise.resolve({
      email,
      name: "user",
    });
  }

  logOut(/*user: string*/): Promise<boolean> {
    return Promise.resolve(true);
  }
}

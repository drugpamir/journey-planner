import {
  User as UserFB,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { LoginApi, User as User } from "./loginApi";

export class LoginApiFirebase implements LoginApi {
  async signUp(email: string, password: string): Promise<User> {
    const auth = getAuth();
    let user: UserFB | undefined;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return parseToUserApp(user);
  }

  async logIn(email: string, password: string): Promise<User> {
    const auth = getAuth();
    let user: UserFB | undefined;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return parseToUserApp(user);
  }

  async logOut(/*user: string*/): Promise<boolean> {
    const auth = getAuth();
    let success = false;
    signOut(auth)
      .then(() => {
        success = true;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return success;
  }
}

function parseToUserApp(userFirebase?: UserFB): User {
  return {
    email: userFirebase?.email || "unknown",
    name: userFirebase?.displayName || "anonymous",
  };
}

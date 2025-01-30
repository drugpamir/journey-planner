import {
  User as UserFB,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { LoginApi } from "./loginApi";
import { User as User } from "../models/User";
import { generateID } from "../utils/dataGenerator";

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
    id: userFirebase?.uid || generateID(),
    email: userFirebase?.email || "unknown",
    name: userFirebase?.displayName || "anonymous",
  };
}

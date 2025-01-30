import {
  User as UserFB,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserApi } from "./userApi";
import { User as User } from "../models/User";
import { generateID } from "../utils/dataGenerator";

export class UserApiFirebase implements UserApi {
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
    return parseToAppUser(user);
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
    return parseToAppUser(user);
  }

  async logOut(): Promise<boolean> {
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

function parseToAppUser(userFirebase?: UserFB): User {
  return {
    id: userFirebase?.uid || generateID(),
    email: userFirebase?.email || "unknown",
    name: userFirebase?.displayName || "anonymous",
  };
}

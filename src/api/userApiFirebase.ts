import {
  User as UserFB,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserApi } from "./userApi";
import { User as User, UserCredentials } from "../models/User";
import { generateID } from "../utils/dataGenerator";
// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "../utils/config";

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();

export class UserApiFirebase implements UserApi {
  async signUp({ email, password }: UserCredentials): Promise<User> {
    const auth = getAuth();
    let user: UserFB | null = null;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return parseToAppUser(user);
  }

  async logIn({ email, password }: UserCredentials): Promise<User> {
    const auth = getAuth();
    let user: UserFB | null = null;
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

function parseToAppUser(userFirebase: UserFB | null): User | null {
  if (!userFirebase) {
    return null;
  }
  return {
    id: userFirebase?.uid || generateID(),
    email: userFirebase?.email || "unknown",
    name: userFirebase?.displayName || "anonymous",
  };
}

import React, { useState } from "react";

import DialogButton from "./DialogButton";
import { User, UserCredentials } from "../models/User";
import { userApi } from "../utils/config";
import useUser from "../hooks/useUser";

interface Props {
  userCredentials: UserCredentials;
  onSuccess: () => void;
  onError: () => void;
}

const LoginButton = ({ userCredentials, onSuccess, onError }: Props) => {
  const [error, setError] = useState(false);
  const [_, setUser] = useUser();

  const handleLogin = async (e: any, userCredentials: UserCredentials) => {
    e.preventDefault();
    let user: User = await userApi.logIn(userCredentials);
    console.log("logged user:", user);
    if (user) {
      setError(false);
      setUser(user);
      onSuccess();
    } else {
      setError(true);
      setUser(null);
      onError();
    }
  };

  return (
    <>
      <DialogButton
        // type="submit"
        onClick={(e) => handleLogin(e, userCredentials)}
      >
        Login
      </DialogButton>
      {error && <span>Wrong email or password!</span>}
    </>
  );
};

export default LoginButton;

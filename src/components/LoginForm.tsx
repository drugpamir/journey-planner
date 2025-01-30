import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "../utils/consts";
import { LoginApi } from "../api/loginApi";
import { User } from "../models/User";

export interface PropsLogin {
  loginApi: LoginApi;
  routeIfLogin: AppRoutes;
}

const LoginForm = ({ loginApi, routeIfLogin }: PropsLogin) => {
  const [email, setEmail] = useState("otus@example.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const user: User = await loginApi.logIn(email, password);
    console.log("user:", user);
    if (user) {
      setError(false);
      navigate(routeIfLogin);
    } else {
      setError(true);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="mail"
          id="mail"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="pwd"
          id="pwd"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default LoginForm;

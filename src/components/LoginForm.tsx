import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "../utils/consts";
import { User } from "../models/User";
import { userApi } from "../utils/config";
import useUser from "../hooks/useUser";

const LoginForm = () => {
  const [email, setEmail] = useState("otus@example.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_, setUser] = useUser();

  console.log("LoginForm");

  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    console.log("handleLogin");
    e.preventDefault();
    let user: User | null = null;
    user = await userApi.logIn({ email, password });
    console.log("user:", user);
    if (user) {
      setUser(user);
      setError(false);
      navigate(AppRoutes.CITIES);
    } else {
      navigate(AppRoutes.ABOUT);
      setUser(null);
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

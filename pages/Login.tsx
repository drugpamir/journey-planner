import React from "react";

import LoginForm, { PropsLogin } from "../components/LoginForm";

const Login = ({ ...props }: PropsLogin) => {
  return <LoginForm {...props}></LoginForm>;
};

export default Login;

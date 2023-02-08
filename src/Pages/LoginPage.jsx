import React from "react";
import { useIsAuthenticated } from "react-auth-kit";
import Header from "../components/Header";
import Login from "../components/Login";

const LoginPage = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div>
      <Header />
      {isAuthenticated() ? "You are logged in" : <Login />}
    </div>
  );
};

export default LoginPage;

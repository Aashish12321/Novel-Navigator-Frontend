import React from "react";
import { useSignOut, useIsAuthenticated } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const UserState = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const logout = () => {
    signOut();
    navigate("/login");
  };

  const login = () => {
    navigate("/login");
  };
  return (
    <div className="login--container">
      {isAuthenticated() ? (
        <Button onClick={logout} className="nav--login" variant="contained">
          Logout
        </Button>
      ) : (
        <Button onClick={login} className="nav--login" variant="contained">
          Login
        </Button>
      )}
    </div>
  );
};

export default UserState;

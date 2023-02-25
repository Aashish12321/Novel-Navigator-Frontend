import React from "react";
import { useSignOut, useIsAuthenticated } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

const UserState = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <div className="login--container">
      {isAuthenticated() ? (
        <button className="nav--logout" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="nav--login">
          Login
        </Link>
      )}
    </div>
  );
};

export default UserState;

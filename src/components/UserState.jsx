import React from "react";
import { useSignOut, useIsAuthenticated } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

const UserState = (props) => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <div className="nav--login">
      {isAuthenticated() ? (
        <button className="nav--logout p-1" onClick={logout}>
          LogOut
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

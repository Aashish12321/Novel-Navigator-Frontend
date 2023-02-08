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
    <div>
      {isAuthenticated() ? (
        <button className="nav--login" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="nav--login nav--link">
          Login
        </Link>
      )}
    </div>
  );
};

export default UserState;

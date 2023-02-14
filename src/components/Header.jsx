import React from "react";
import { Link } from "react-router-dom";
import UserState from "./UserState";
const Header = () => {
  return (
    <nav>
      <Link to="/" className="nav--link nav--title">
        Novel Navigator
      </Link>
      <Link to="/topbooks" className="nav--link nav--sub">
        Top 50 Books
      </Link>
      <Link to="/recommendations" className="nav--link nav--sub">
        Get recommendations
      </Link>
      <Link to="/about" className="nav--link nav--sub">
        About
      </Link>
      <UserState />
    </nav>
  );
};
export default Header;

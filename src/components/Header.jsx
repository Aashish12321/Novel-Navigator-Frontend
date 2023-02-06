import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to="/" className="nav--link">
        <a href="#" className="nav--title">
          Novel Navigator
        </a>
      </Link>
      <Link to="/topbooks" className="nav--link">
        <a href="#" className="nav--sub">
          Top 50 Books
        </a>
      </Link>
      <Link to="/recommendations" className="nav--link">
        <a href="#" className="nav--sub">
          Get recommendations
        </a>
      </Link>
      <Link to="/about" className="nav--link">
        <a href="#" className="nav--sub">
          About
        </a>
      </Link>
    </nav>
  );
};
export default Header;

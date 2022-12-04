import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link id="Home" to="/">
          Home
        </Link>
        <Link id="Movies" to="/movies">
          Movies
        </Link>
        <Link id="People" to="/people">
          People
        </Link>
        <Link id="Locations" to="/locations">
          Locations
        </Link>
      </nav>
    </header>
  );
};

export default Nav;

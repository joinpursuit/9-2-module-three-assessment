import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src="./ghibliapp-logo.png" alt="ghibliapp logo" />
      </Link>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
}

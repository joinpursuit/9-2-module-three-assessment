import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../images/logo.jpeg";

export default function Nav() {
  return (
    <header>
      <article>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </article>

      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home -LOGO-</Link>
          </li> */}
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/Locations">Locations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

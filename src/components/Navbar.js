import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="/logo.png" alt="studio ghilbi logo" />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
}

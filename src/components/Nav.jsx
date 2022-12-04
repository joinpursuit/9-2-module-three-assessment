import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqe5U-ztDX2tIfKCtLozUZTzlySDN2VzLfw&usqp=CAU"
          alt="logo"
        />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/location">Locations</Link>
    </nav>
  );
}

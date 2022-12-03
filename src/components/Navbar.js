import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://hbomax-images.warnermediacdn.com/2020-11/studio-ghibli.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=960"
          alt="studio ghilbi logo"
        />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
}

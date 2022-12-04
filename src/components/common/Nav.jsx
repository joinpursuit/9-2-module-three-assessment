import { Link } from "react-router-dom";

export default function Nav() {
  let ghibliImg =
    "https://i.pinimg.com/originals/b4/00/a2/b400a2b4ca3da09dbee9ea425e3bd857.jpg";
  return (
    <header>
      <nav>
        {/* <ul>
          <li>
            <Link to="/">
              <img src={ghibliImg} alt="ghibli-img" />
            </Link>
          </li>
          <li>
            <Link to="/movies"> Movies </Link>
          </li>
          <li>
            <Link to="/people"> People </Link>
          </li>
          <li>
            <Link to="/locations"> Locations </Link>
          </li>
        </ul> */}

            <Link to="/">
              <img src={ghibliImg} alt="ghibli-img" />
            </Link>

            <Link to="/movies"> Movies </Link>

            <Link to="/people"> People </Link>

            <Link to="/locations"> Locations </Link>

      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <nav>
        <Link to="/" id="logo">
          <img
         
            src="https://cdn.vox-cdn.com/thumbor/g2xlpq1YVNz9ceS6z3VazJ9nUC0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9432879/r_m_sauce.jpg"
            alt="logo"
            width="50px"
            height="50px"
          />
          <h6  className="hover">Rickbli</h6>
        </Link>
        <Link to="/movies">
          <h3  className="hover">Movies</h3>
        </Link>
        <Link to="/people">
          <h3  className="hover">People</h3>
        </Link>
        <Link to="/locations">
          <h3  className="hover">Locations</h3>
        </Link>
      </nav>
    </div>
  );
}

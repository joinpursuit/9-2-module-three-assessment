import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Movies, People, Location } from "./components/Index";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">
            <Icon.CameraReelsFill /> <span className="logo"></span>
          </Link>
          <div>
            <Icon.Film />
            <br />
            <Link to="/movies">Movies</Link>
            <Icon.PeopleFill />
            <Link to="/people">People</Link>
            <Icon.HouseDoorFill />
            <Link to="/location">Location</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

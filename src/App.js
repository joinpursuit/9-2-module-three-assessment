import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import films from "../src/data/films.json";
import people from "../src/data/people.json";
import location from "../src/data/locations.json";

//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import MoviesIndex from "./components/movies/MoviesIndex";
import People from "./components/people/People";
import Locations from "./components/locations/Locations";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesIndex films={films} />} />
          <Route path="/people" element={<People people={people} />} />
          <Route
            path="/locations"
            element={<Locations location={location} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

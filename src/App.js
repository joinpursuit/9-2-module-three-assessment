import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

// const films = "/films.json";
// const locations = "/locations.json";
// const people = "/people.json";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

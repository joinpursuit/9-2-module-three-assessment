import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Locations from "./pages/Locations";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

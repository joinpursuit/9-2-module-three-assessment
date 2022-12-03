import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
import MoviesPage from "./pages/MoviesPage";
import PeoplePage from "./pages/PeoplePage";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/people" element={<PeoplePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

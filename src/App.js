import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Movies/" element={<Movies />} />
        <Route path="/People/" element={<People />} />
        <Route path="/Locations/" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

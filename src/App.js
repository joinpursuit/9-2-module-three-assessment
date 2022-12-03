import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/sub/navbar";
import People from "./components/people";
import Movies from "./components/movies";
import Locations from "./components/locations";

function App() {

  return (
    <div className="app">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/people" element={<Movies/>} />
          <Route path="/movies" element={<People/>} />
          <Route path="/Locations" element={<Locations/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
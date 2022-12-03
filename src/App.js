import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/sub/navbar";
import Home from "./components/home";
import Movies from "./components/movies";
import People from "./components/people";
import Locations from "./components/locations";
function App() {

  return (
    <div className="app">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/Locations" element={<Locations/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

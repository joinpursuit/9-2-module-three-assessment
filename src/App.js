import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Movies />} path="/movies" />
          <Route element={<People />} path="/people" />
          <Route element={<Locations />} path="/locations" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

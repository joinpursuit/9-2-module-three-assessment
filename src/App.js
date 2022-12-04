import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Common/Nav";
import Home from "./components/Home";
import People from "./components/People/People";
import Movies from "./components/Movies/Movies";
import Locations from "./components/Locations/Locations";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/people" element={<People />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

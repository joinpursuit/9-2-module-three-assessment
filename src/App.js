import { useEffect, useState } from "react";

// VALID JSON FILES: films.json, locations.json, people.json

// key => 'name' | 'climate' | 'terrain'
// (key) => locations.sort((a, b) => a.[key].localeCompare(b.[key]))

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Location from "./components/Location";
import People from "./components/People";

function App() {
  const [films, setFilms] = useState([]);
  const [persons, setPersons] = useState([]);

  ////For Movies
  useEffect(() => {
    fetch("films.json")
      .then((response) => response.json())
      .then((filmsList) => {
        setFilms(filmsList);
      });
  }, []);

  ///For Persons

  useEffect(() => {
    fetch("people.json")
      .then((response) => response.json())
      .then((personsList) => {
        setPersons(personsList);
      });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies data={films} />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/people" element={<People dataPersons={persons} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

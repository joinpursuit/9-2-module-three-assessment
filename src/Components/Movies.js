import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./films.json";

const Movies = () => {
  const [data, setData] = useState([]);
  const movieData = require("./films.json");

  useEffect(() => {
    setData(movieData);
  }, [movieData]);
  console.log(movieData);

  const [selected, setSelected] = useState("");

  function handleSelect(e) {
    e.preventDefault();
    setSelected(e.target.value);
  }

  function selectDisplay() {
    const showMovie = data.filter((d) => d.title === selected);
    if (showMovie) {
      return (
        <div>
          {showMovie.map((show) => {
            return (
              <div key={show.id}>
                <h1>
                  <strong>Title:</strong>
                  {show.title}
                </h1>
                <br />
                <h2>
                  <strong>Release Date:</strong>
                  {show.release_date}
                </h2>
                <br />
                <p>
                  <strong>Description:</strong>
                  {show.description}
                </p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={handleSelect}>
        {data.map((movieData) => {
          return (
            <option value={movieData.title} key={movieData.id}>
              {movieData.title}
            </option>
          );
        })}
      </select>
      {selectDisplay()}
    </div>
  );
};

export default Movies;

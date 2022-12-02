import React from "react";
import { useState } from "react";

export default function Movies({ films }) {
  const [filmDetails, setFilmDetails] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setFilmDetails(e.target.value);
  }

  let filterFilms = films.filter((film) => film.title === filmDetails)

  console.log();
  return (
    <div className="movies">
      <h5>Select a Movie</h5>
      <select onChange={handleChange}>
        <option value=""></option>
        {films.map((film) => {
          return (
            <option key={film.id} value={film.title}>
              {film.title}
            </option>
          );
        })}
      </select>
      {filterFilms.map((film) => {
        return (
          <article>
            <p><strong>Title:</strong> {film.title}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
            <p><strong>Description:</strong> {film.description}</p>
          </article>
        )
      })
    }
    </div>
  );
}

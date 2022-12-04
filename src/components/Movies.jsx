import React from "react";
import { useState } from "react";

export default function Movies({ films }) {
  const [userSelection, setUserSelection] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setUserSelection(e.target.value);
  }

  let filterByTitle = films.filter((film) => film.title === userSelection);

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={handleChange}>
        <option value=""></option>
        {films.map((film) => (
          <option key={film.id} value={film.title}>
            {film.title}
          </option>
        ))}
      </select>
      {filterByTitle.map((film) => (
        <aside key={film.id}>
          <h3>
            <strong>Title:</strong> {film.title}
          </h3>
          <p>
            <strong>Release Date:</strong> {film.release_date}
          </p>
          <p>
            <strong>Description:</strong> {film.description}
          </p>
        </aside>
      ))}
    </div>
  );
}

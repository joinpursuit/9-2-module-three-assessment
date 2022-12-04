import React, { useState } from "react";

import Movie from "./Movie";

function MoviesIndex({ films }) {
  const [userSelect, setUserSelect] = useState("");

  function handleSelectChange(e) {
    setUserSelect(e.target.value);
  }

  const selectedMovie = films.filter((film) => film.title === userSelect);

  return (
    <div className="movies">
      <h2>Select a movie</h2>
      <br />
      <br />
      <select
        className="movie-list"
        onChange={handleSelectChange}
        value={userSelect}
        key={films.id}
      >
        {films.map((film) => (
          <option value={film.title} key={film.id}>
            {film.title}
          </option>
        ))}
      </select>
      <Movie selectedMovie={selectedMovie} />
    </div>
  );
}

export default MoviesIndex;

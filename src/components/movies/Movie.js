import React from "react";

function Movie({ selectedMovie }) {
  return (
    <div className="movies">
      {selectedMovie.map((movie) => (
        <div key={movie.id}>
          <header>Title: {movie.title}</header>
          <p>Release Date: {movie.release_date}</p>
          <p>Description: {movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Movie;

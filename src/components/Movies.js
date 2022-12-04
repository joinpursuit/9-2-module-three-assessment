import { useState, useEffect } from "react";

import Movie from "../components/Movie";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  function fetchMovies() {
    return fetch("films.json").then((response) => response.json());
  }

  function selectedMovieTitle(e) {
    e.preventDefault();
    setSelectedMovie(e.target.value);
  }

  useEffect(() => {
    fetchMovies()
      .then((films) => {
        setMovies([...films]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select name="movies" onChange={(e) => selectedMovieTitle(e)}>
        <option value="">Select a Movie</option>
        {movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      {selectedMovie ? (
        <Movie selectedMovie={selectedMovie} movies={movies} />
      ) : null}
    </div>
  );
}

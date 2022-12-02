import { useEffect } from "react";
import { useState } from "react";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  function getMovies() {
    return fetch("films.json").then((response) => response.json());
  }

  useEffect(() => {
    getMovies()
      .then((films) => {
        setMovies([...films]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <select name="movies" id="movie-select">
        <option value=""></option>
        {movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.title}>
              {movie.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

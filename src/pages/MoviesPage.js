import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../Components/MovieCard";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");

  function getMovies() {
    return fetch("films.json").then((response) => response.json());
  }

  function getSelectedMovieId(e) {
    setSelectedMovieId(e.target.value);
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
    <section className="movies">
      <h2>Select a Movie</h2>
      <select
        name="movies"
        id="movie-select"
        onChange={(e) => getSelectedMovieId(e)}
      >
        <option value=""></option>
        {movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      {selectedMovieId ? (
        <MovieCard movieId={selectedMovieId} movies={movies} />
      ) : null}
    </section>
  );
}

import { useState } from "react";
import Movie from "../components/Movie";
import { useFetch } from "../hooks/useFetch";

export default function Movies() {
  const { data: movies, isPending, error } = useFetch("/films.json");
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleChange = (e) => {
    const selectedTitle = e.target.value;
    const movie = movies.find((movie) => movie.title === selectedTitle);
    console.log(movie);
    setSelectedMovie(movie);
  };

  return (
    <section className="movies" onChange={handleChange}>
      <h2>Select a movie</h2>
      {isPending && <p>Loading... </p>}
      {error && <p>{error}</p>}
      {movies && (
        <select name="movies">
          <option value=""></option>

          {movies.map((movie) => (
            <option value={movie.title} key={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      )}

      <Movie selectedMovie={selectedMovie} />
    </section>
  );
}

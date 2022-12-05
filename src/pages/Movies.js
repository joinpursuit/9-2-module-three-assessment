import { useState, useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import MovieList from "../components/MovieList";
import Movie from "../components/Movie";

export default function Movies() {
  const { data: movies, isPending, error } = useFetch("/films.json");
  const [selectedMovie, setSelectedMovie] = useState("");
  const selectElement = useRef();

  const handleChange = (e, title) => {
    const selectedTitle = e?.target.value || title;
    const movie = movies.find((movie) => movie.title === selectedTitle);
    console.log(movie);
    setSelectedMovie(movie);
    if (!e) selectElement.current.value = title;
    window.scrollTo(0, 0);
  };
  console.log("selected movie", selectedMovie);

  return (
    <section className="movies">
      <h2>Select a movie</h2>
      {isPending && <p>Loading... </p>}
      {error && <p>{error}</p>}
      {movies && (
        <select name="movies" onChange={handleChange} ref={selectElement}>
          <option value=""></option>

          {movies.map((movie) => (
            <option value={movie.title} key={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      )}
      {selectedMovie && <Movie selectedMovie={selectedMovie} />}
      {!selectedMovie && (
        <img
          src="https://hbomax-images.warnermediacdn.com/2020-11/studio-ghibli.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=960"
          alt="studio ghilbi logo"
          id="default-img"
        />
      )}

      <MovieList movies={movies} handleChange={handleChange} />
    </section>
  );
}

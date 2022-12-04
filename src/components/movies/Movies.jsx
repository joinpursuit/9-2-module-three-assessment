import { useState, useEffect } from "react";
import { getFlims } from "../../api/fetch";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState({
    // title: "",
    // releaseDate: "",
    // description: "",
  });

  useEffect(() => {
    getFlims()
      .then((response) => {

        setMovies(response);

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleOnChange(e) {
    e.preventDefault();


    movies.forEach((movie) => {
      if (movie.title === e.target.value) {
        console.log(movie);
        setSelectedFilm({
          title: movie.title,
          releaseDate: movie.release_date,
          description: movie.description,
        });
      } else if (e.target.value.length === 0) {
        setSelectedFilm({});
      }
    });
  }

  return (
    <div className="movies">
      <h3> Select a Movie</h3>
      <select name="Movies" id="movie-select" onChange={handleOnChange}>
        <option value=""> </option>
        {movies.map((movie) => (
          <option key={movie.title} value={movie.title}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedFilm.title && (
        <div>
          <h2>
            {" "}
            <span> Title: </span> {selectedFilm.title}{" "}
          </h2>
          <p>
            <span>Release Date: </span> {selectedFilm.releaseDate}
          </p>
          <p>
            <span>Description: </span> {selectedFilm.description}
          </p>
        </div>
      )}
    </div>
  );
}

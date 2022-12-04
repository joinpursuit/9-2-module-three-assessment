import "../Movies/Movies.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function Movies() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [allFilms, setAllFilms] = useState([]);
  const movieAPI = "/films.json";

  useEffect(() => {
    fetch(movieAPI)
      .then((response) => response.json())
      .then((films) => {
        setAllFilms(films);
      });
  }, []);

  let movieTitles = {};

  allFilms.forEach((film) => (movieTitles[film.title] = 1));
  movieTitles = Object.keys(movieTitles);

  function handleChange(e) {
    e.preventDefault();
    setCurrentTitle(e.target.value);
  }

  return (
    <div className="movies">
      <div className="select">
        {" "}
        <p>Select A Movie</p>
        <select onChange={handleChange}>
          <option value=""></option>
          {movieTitles.map((title) => {
            return (
              <option key={title} value={title}>
                {title}
              </option>
            );
          })}
        </select>
        <MovieCard movies={allFilms} currentTitle={currentTitle} />
      </div>
    </div>
  );
}

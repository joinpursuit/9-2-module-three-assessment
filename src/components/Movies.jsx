import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GHIBLI_API = "/films.json";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState();

  useEffect(() => {
    fetch(GHIBLI_API)
      .then((response) => response.json())
      .then(setMovies);
  }, []);

  function selectedMovie(e) {
    const movie = movies.find(movie => movie.id === e.target.value);
    setSelectMovie(movie);
  }

  return (
    <div className="movies">
      <h3>Select a Movie</h3>
      <select onChange={selectedMovie}>
        <option value=""></option>
        {movies.map((movie) => (
          <option value={movie.id}>{movie.title}</option>
        ))}
      </select>
      {selectMovie ? (
        <div>
          <h2> 
            <b>Title: </b>
            <span>{ selectMovie.title }</span>
          </h2>
          <p>
            <b>Release Date: </b>
            <span>{ selectMovie.release_date }</span>
          </p>
          <p>
            <b>Description: </b>
            <span>{ selectMovie.description }</span>
          </p>
        </div>
      ) : (null)
      }
    </div>
  );
}

export default Movies;

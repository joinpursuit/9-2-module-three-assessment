import { useEffect, useState } from "react";

const films_json = "/films.json";

export default function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    fetch(films_json)
      .then((res) => res.json())
      .then(setAllMovies);
  }, []);

  function handleChange(e) {
    setSelectedMovie(e.target.value);
  }

  function filteredMovie() {
    const chosenMovie = allMovies.filter(
      (movie) => movie.title === selectedMovie
    );

    if (allMovies) {
      return (
        <aside>
          {chosenMovie.map((movie) => {
            return (
              <div key={movie.id}>
                <h3>Title: {movie.title}</h3>
                <span>Released Date:</span> {movie.release_date}
                <br />
                <span>Description:</span> {movie.description}
              </div>
            );
          })}
        </aside>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="movies">
      <section>
        <h1>Select a Movie</h1>
        <select onChange={handleChange}>
          <option value=""></option>
          {allMovies.map((movie) => {
            return (
              <option key={movie.id} value={movie.title}>
                {movie.title}
              </option>
            );
          })}
        </select>
      </section>
      {filteredMovie()}
    </div>
  );
}
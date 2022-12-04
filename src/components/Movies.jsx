import { useState, useEffect } from "react";

export default function Movies() {
  const [moviesArr, setMoviesArr] = useState([]);
  const [dropdownOption, setDropdownOption] = useState({});

  useEffect(() => {
    fetch("./films.json")
      .then((response) => response.json())
      .then((data) => setMoviesArr(data))
      .catch((error) => console.error(error));
  }, [moviesArr.length]);

  function movieSelect(event) {
    if (event.target.value !== "-1") {
      setDropdownOption(moviesArr[event.target.value]);
    } else {
      setDropdownOption({});
    }
  }

  return (
    <div className="movies route">
      <h1 className="page-title">Select a Movie</h1>
      <select
        name="movies-dropdown"
        id="movies-dropdown"
        onChange={movieSelect}
      >
        <option value="-1" key="default">
          ---Please select a movie---
        </option>
        {moviesArr.map((movie) => {
          return (
            <option value={moviesArr.indexOf(movie)} key={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      {dropdownOption.title ? (
        <aside>
          <h1>{dropdownOption.title}</h1>
          <p>
            <b>Release Date:</b> {dropdownOption.release_date}
          </p>
          <p>
            <b>Description:</b> {dropdownOption.description}
          </p>
        </aside>
      ) : null}
    </div>
  );
}

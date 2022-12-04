import { useState, useEffect } from "react";

export default function Movies() {
  const [moviesArr, setMoviesArr] = useState([]);
  const [dropdownOption, setDropdownOption] = useState({});

  useEffect(() => {
    fetch("./films.json")
      .then((response) => response.json())
      .then((data) => setMoviesArr(data))
      .then(console.log(moviesArr))
      .catch((error) => console.log(error));
  }, [moviesArr.length]);

  function movieSelect(event) {
    if (event.target.value !== "-1") {
      setDropdownOption(moviesArr[event.target.value]);
      console.log(moviesArr);
      console.log(event.target.value);
    } else {
      setDropdownOption({});
    }
  }

  return (
    <div className="movies">
      <p className="page-title">Select a Movie</p>
      <select
        name="movies-dropdown"
        id="movies-dropdown"
        onChange={movieSelect}
      >
        <option value="-1" key="default">
          ---Please select a movie---
        </option>
        {moviesArr.map((movie) => {
          //   console.log(moviesArr.indexOf(movie));
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

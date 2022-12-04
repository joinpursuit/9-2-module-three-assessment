import React from "react";
import { useState } from "react";

const Movies = ({ data }) => {
  // DATA = [{ title: peli1, id: 1234 }, ...]
  const [movie, setMovie] = useState("");
   
  // ['peli1', 'peli2', 'peli3' ] p1li.id
  const titles = data.map((element) => ({
    title: element.title,
    id: element.id //accedemos a este id para luego poder usarlo como key en los posteriores mapeos 
  })); 

  const movieSelect = (e) => {
    setMovie(data.find((element) => element.title === e.target.value));
  };

  return (
    <div className="movies">
      <label htmlFor="searchTitle">Select a Movie </label>
      <select name="searchTitle" id="searchTitle" onChange={movieSelect}>
        <option value=""></option> AQUI ESTA VACIA MI PRIMERA OPCION
        {titles.map((element) => (
          <option key={element.id}> {element.title} </option>
        ))}
      </select>

      {movie && (
        <div>
          <h1>
            <b>Title: </b>
            {movie.title}
          </h1>
          <p>
            <b>Release Date: </b>
            {movie.release_date}
          </p>
          <p>
            <b>Description: </b>
            {movie.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Movies;

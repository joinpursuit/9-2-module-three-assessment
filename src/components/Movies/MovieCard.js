// import { useState } from "react";
import "./MovieCard.css";

export default function MovieCard({ movies, currentTitle }) {
  const currentMovie = movies.filter((movie) => {
    return movie.title === currentTitle;
  });


  return (
    <>
      {" "}
      {currentTitle ? (
        <div className="movie-card">
          <h1>
            Title: <span>{currentTitle}</span>{" "}
          </h1>

          <img
            width="200px"
            height="150px"
            src={currentMovie[0].movie_banner}
            alt="movie-banner"
          />

          <h4>Release Date: {currentMovie[0].release_date}</h4>

          <h5>
            Description: <span id="text">{currentMovie[0].description}</span>
          </h5>
        </div>
      ) : (
        <p id="nul"> Pick Your Favorite!</p>
      )}
    </>
  );
}

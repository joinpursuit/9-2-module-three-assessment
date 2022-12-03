export default function MovieList({ movies, handleChange }) {
  return (
    <div className="movie-list-container">
      <ul className="movie-list">
        {movies &&
          movies.map((movie) => (
            <li
              key={movie.id}
              className="movie-card"
              onClick={() => handleChange(null, movie.title)}
            >
              <img src={movie.movie_banner} alt="movie banner" />
              <h3>{movie.title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}

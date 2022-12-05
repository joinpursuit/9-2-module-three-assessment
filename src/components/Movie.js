export default function Movie({ selectedMovie: movie }) {
  return (
    movie && (
      <aside className="movie">
        <h2>Title:{movie.title}</h2>
        <div className="img-wrapper">
          <img src={movie.movie_banner} alt="movie banner" />
        </div>
        <p>
          <span>Release Date: </span>
          {movie.release_date}
        </p>
        <p>
          <span>Description:</span>
          {movie.description}
        </p>
      </aside>
    )
  );
}

export default function Movie({ selectedMovie: movie }) {
  return (
    movie && (
      <aside className="movie">
        <h2>Title:{movie.title}</h2>
        <img src={movie.movie_banner} alt="movie banner" />

        <p>{movie.description}</p>
      </aside>
    )
  );
}

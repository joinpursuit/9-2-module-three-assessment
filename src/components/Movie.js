export default function Movie({ selectedMovie, movies }) {
  const movie = movies.filter((movie) => movie.id === selectedMovie)[0];
  return (
    <div className="movieCard">
      <h2>Title: {movie.title}</h2>
      <p>Release date: {movie["release_date"]}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
}

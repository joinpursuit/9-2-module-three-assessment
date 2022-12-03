import Movie from "../components/Movie";
import useFetch from "../hooks/useFetch";

export default function Movies() {
  const { data: movies, isPending, error } = useFetch("/films.json");
  const handleChange = (e) => {
    const movie = e.target.value;
  };
  return (
    <section className="movies" onChange={handleChange}>
      <h2>Select a movie</h2>
      {isPending && <p>Loading... </p>}
      {error && <p>{error}</p>}
      <select name="movies">
        <option value=""></option>

        {movies &&
          movies.map((movie) => (
            <option value={movie.title} key={movie.id}>
              {movie.title}
            </option>
          ))}
      </select>
      <Movie />
    </section>
  );
}

import { useEffect, useState } from "react"

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(-1);

  const getData = async () => {
    const url = `${process.env.REACT_APP_API}/films`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies([{id: -1}, ...data]);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setSelected(e.target.value);
  }

  const renderMovie =  () => {
    if (parseInt(selected) === -1) return;
    const movie = movies.find(m => m.id === selected);

    return (
      <section>
        <h2><strong>Title:</strong> {movie.title}</h2>
        <p><strong>Release date:</strong> {movie.release_date}</p>
        <p><strong>Description:</strong> {movie.description}</p>
      </section>
    )
  }

  return (
    <div className="movies center">
      <label forhtml="select-movie">Select a Movie</label>
      <select id="select-movie" onChange={handleChange}>
        {movies.map(movie => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
      </select>
      {renderMovie()}
    </div>
  )
}

export default Movies

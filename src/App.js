import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import People from "./components/People";
import { useEffect, useState } from "react";

const films_json = "/films.json";


function App() {

  const [allMovies, setAllMovies] = useState([])

  const [selectedMovie, setSelectedMovie] = useState("")

  useEffect(() => {
      fetch(films_json)
          .then(res => res.json())
      .then(setAllMovies)
}, [])

  return (
    <Router>
<Nav/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies allMovies={allMovies} selectedMovie={selectedMovie} setSelectedMovie={ setSelectedMovie} />} />
          <Route path="/people" element={ <People/>} />
     </Routes>
      
    </div>

    </Router>
  );
}

export default App;

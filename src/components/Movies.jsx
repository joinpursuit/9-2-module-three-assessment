import { useEffect, useState } from "react"

const films_json = "/films.json";

export default function Movies() {

    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        fetch(films_json)
            .then(res => res.json())
        .then(setAllMovies)
}, [])

    console.log(allMovies)

    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <select>
                <option value=""></option>
                {allMovies.map((movie) => {
                    return (
                        <option key={movie.id} value={movie.title}>{movie.title}</option>
                    )
                })}
            </select>
       </div>
   ) 
}
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

export default function Movies(){
const [movies,setMovies]=useState([])
const [movie,setMovie]=useState({})
const [display,setDisplay]=useState(false)

useEffect(()=>{
fetch(`films.json`).then(dat=>dat.json()).then(dat=>setMovies(dat))
},[])


function handleChange(e){
if (!e.target.value){
    setDisplay(false)
}
setDisplay(true)
setMovie({...movies[e.target.value]})

}


return (
    <div className="movies">
        <h1>Select a movie</h1>
        <select onChange={handleChange}>

            <option value=""></option>

            {movies.map((movie,idx)=>(
               
                
                <option value={idx} >{movie.title}</option>
               
                ))}
        </select>
        <section >
           
                {display && movie?(
                <MovieCard movie={movie}/>): null}
        </section>

    </div>
)
}
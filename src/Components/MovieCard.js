

export default function MovieCard({movie}){
    
    return(
        <>
       {movie.title?( <div className="movies-card">
            <h2>Title:</h2><span>{movie.title}</span>
            <h4>Release Date:</h4><span>{movie.release_date}</span>
            <h4>Description:</h4><span>{movie.description}</span>
        </div>):null
       }
       </>
    )
}
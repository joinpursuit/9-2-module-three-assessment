export default function Movies({allMovies, selectedMovie, setSelectedMovie}) {

    function handleChange(e) {
        setSelectedMovie(e.target.value)
    }

    // console.log(selectedMovie)

    function filteredMovie() {
        const chosenMovie = allMovies.filter((movie) => movie.title === selectedMovie)
        // console.log(chosenMovie)

        if (allMovies) {
            return (
                <div>
                    {chosenMovie.map(movie => {
                        return (
                            <div key={movie.id}>
                            <h2>
                         Title: {movie.title}
                    </h2>
                    <p>Released Date: {movie.release_date }</p>
                    <p>
                       Description: {movie.description}
                                </p>
                            </div>
                        )
                    })}
                    
                   
                </div>
            )
            
        } else {
            return null;
        }
    }

    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleChange}>
                <option value=""></option>
                {allMovies.map((movie) => {
                    return (
                        <option key={movie.id} value={movie.title}>{movie.title}</option>
                    )
                })}
            </select>
            <div>
                <h2>
                   { filteredMovie()}
                </h2>
                
            
            </div>
       </div>
   ) 
}
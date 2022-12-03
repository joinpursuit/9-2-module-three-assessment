import { useState, useEffect } from "react";
import "./films.json";
import MoviesDetails from "./MovieDetails";
import MovieDetailsSpecific from "./MovieDetailsSpecific";

function Movies() {
    // const [details, setDetails] = useState("SelectGhibliTitle");

  const [data, setData] = useState([]);
  const [title, setTitle] = useState({});


  

  const dataGhibli = require("./films.json");
  useEffect(() => {
    //   fetch(dataGhibli)
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    //   console.log(data)

    setData(dataGhibli);
  }, [dataGhibli]);


  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="movies">
        
      <select           onChange={handleOnChange}>
        <option value="SelectGhibliTitle">Select Movie Title</option>
        {data.map((ghibliData) => {
          return (
            <option value={ghibliData.title} key={ghibliData.title}>
              {<MoviesDetails ghibliData={ghibliData} />}
            </option>
          );
        })}
      </select>

<div><MovieDetailsSpecific data={data} selectedTitle={title} /></div>

    </div>
  );
}

export default Movies;

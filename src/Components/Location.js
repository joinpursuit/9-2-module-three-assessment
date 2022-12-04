import React, { useEffect, useState } from 'react'
import "./locations.json"


const Location = () => {
  const Locate_ApI = require("./locations.json")
  const [data, setData] = useState([])
  

  useEffect(() => {
    setData(Locate_ApI);
  }, [Locate_ApI]);
  // console.log(movieData);

  const [moreDetails, setMoreDetails] = useState(false);
  function toggleShowMore(e) {
    e.preventDefault();
    setMoreDetails(!moreDetails)
  }

  function locationDisplay(){
    return(
      <div></div>
    )
  }

  return (
    <div>
      <header>List of Locations</header>
      <button onClick={(e) => toggleShowMore(e)}>
              {!moreDetails ? "Show Locations": "Hide Locations"}
            </button>
            {/* <div className="ex-info">
              {moreDetails ? <ShowMore data={data} /> : null}
            </div> */}
            
    </div>
  )
}

export default Location

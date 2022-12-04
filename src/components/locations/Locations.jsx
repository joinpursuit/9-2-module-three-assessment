import { useState, useEffect } from "react";
import { getLocations } from "../../api/fetch";
import Location from "./Location";

export default function Locations() {
  const [buttonClick, setButtonClick] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations()
      .then((response) => {
        setLocations(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(locations);


  function handleSortByName(){
    let sortName = locations.sort((a,b) => a.name > b.name ? 1 : -1)
    setLocations([...sortName]);
  }

  function handleSortByClimate(){

    let sortClimate = locations.map(location => location).sort((a,b) => a.climate > b.climate ? 1 : -1)
    setLocations(sortClimate);
  }

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={() => setButtonClick(!buttonClick)}>
        {buttonClick ? "Hide Locations" : "Show Locations"}
      </button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <button onClick={handleSortByClimate}> Sort by Climate </button>
      {buttonClick && 
        <ul>
            {
                locations.map(location => (
                    <li key={location.id}>
                        <Location location={location} />
                    </li>
                ))
                
            }
        </ul>
        }
    </div>
  );
}

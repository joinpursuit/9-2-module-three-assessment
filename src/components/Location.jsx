import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const LOCATION_GHIBLI_API = "/locations.json";

function Location() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShow] = useState(false);
  const [sort, setSort] = useState();
  


  useEffect(() => {
    fetch(LOCATION_GHIBLI_API)
      .then((response) => response.json())
      .then(setLocations);
  }, []);

  function toggleShowButton() {
    setShow(!showLocations);
  }

  function sortButton(key) {
    setSort(key);
  }

  let sortLocations = locations;
  if(sort) {
    sortLocations = locations.sort((a, b) => a[sort] > b[sort] ? 1 : -1 )
  }

  return (
    <div className="locations">
      <h3>List of Locations</h3>
      <div>
        <Button onClick={toggleShowButton}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </Button>
        {showLocations ? (
          <>
            <Button onClick={() => sortButton("name")}>Sort by Name</Button>
            <Button onClick={() => sortButton("climate")}>Sort by Climate</Button>
            <Button onClick={() => sortButton("terrain")}>Sort by Terrain</Button>
          </>
        ) : null}
      </div>
      {showLocations ? (
        <ul>
          {sortLocations.map((location) => (
            <li key={location.id}>
              <ul>
                <li>Name: {location.name}</li>
                <li>Climate: {location.climate}</li>
                <li>Terrain: {location.terrain}</li>
              </ul>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Location;

import React from "react";
import { useState, useEffect } from "react";

export default function Locations() {
  const [showMore, setShowMore] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("locations.json")
      .then((response) => response.json())
      .then(setLocations);
  }, []);

  console.log(locations);
  return (
    <div className="locations">
      <h1>Lis of Locations</h1>
      <button onClick={(e) => setShowMore(!showMore)}>
        {!showMore ? "Show Locations " : "Hide Locations"}
      </button>
      {showMore && (
        <div className="locations">
          <button>Sort By Name</button>
          <button>Sort By Climate</button>
          <ul>
            {" "}
            {locations.map((location) => {
              return (
                <li key={location.id}>
                  <p>Name: {location.name}</p>
                  <p>Climate: {location.climate}</p>
                  <p>Terrain: {location.terrain}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

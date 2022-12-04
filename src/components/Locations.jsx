import React from "react";
import { useState, useEffect } from "react";

export default function Locations() {
  const [showMore, setShowMore] = useState(false);
  const [locations, setLocations] = useState([]);
  const [sortedNames, setSortedNames] = useState();
  const [toggleNames, setToggleNames] = useState(false);
  useEffect(() => {
    fetch("locations.json")
      .then((response) => response.json())
      .then(setLocations);
  }, []);

  function sortLocationName() {
    setToggleNames(!toggleNames);
    const sortNames = [...locations].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setSortedNames(sortNames);
  }
  // console.log(locations);
  console.log(sortedNames);
  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={(e) => setShowMore(!showMore)}>
        {!showMore ? "Show Locations " : "Hide Locations"}
      </button>{" "}
      <button onClick={sortLocationName}>
        {toggleNames ? "hide" : "Sort by Name"}
      </button>
      {showMore ? (
        <div className="locations">
          <ul>
            {" "}
            {locations.map((location) => (
              <li key={location.id}>
                <p>Name: {location.name}</p>
                <p>Climate: {location.climate}</p>
                <p>Terrain: {location.terrain}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : toggleNames ? (
        <div className="locations">
          <ul>
            {" "}
            {sortedNames.map((names) => (
              <li key={names.id}>
                <p>Name: {names.name}</p>
                <p>Climate: {names.climate}</p>
                <p>Terrain: {names.terrain}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

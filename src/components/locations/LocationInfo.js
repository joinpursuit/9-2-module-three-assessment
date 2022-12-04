import React, { useEffect, useState } from "react";
import "../locations/LocationInfo.css";
import LocationFilter from "./LocationFilter";

function LocationInfo({ location }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(location);
  }, [location]);

  function sortByName() {
    const sortedNames = [...data].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setData(sortedNames);
  }

  function sortByClimate() {
    const sortedClimate = [...data].sort((a, b) => {
      return a.climate > b.climate ? 1 : -1;
    });
    setData(sortedClimate);
  }

  function sortByTerrain() {
    const sortedTerrain = [...data].sort((a, b) => {
      return a.terrain > b.terrain ? 1 : -1;
    });
    setData(sortedTerrain);
  }

  return (
    <div className="locations">
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByClimate}> Sort by Climate</button>
      <button onClick={sortByTerrain}> Sort by Terrain</button>
      <LocationFilter data={data} />
    </div>
  );
}

export default LocationInfo;

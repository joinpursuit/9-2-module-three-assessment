import React, { useState } from "react";
import LocationInfo from "./LocationInfo";

function Locations({ location }) {
  const [displayLocations, toggleDisplayLocations] = useState(false);

  function showLocations(e) {
    e.preventDefault();
    toggleDisplayLocations(!displayLocations);
  }

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <br />
      <br />
      <button onClick={(e) => showLocations(e)}>
        {displayLocations ? "Show Less..." : "Show Locations..."}
      </button>
      <span>
        {displayLocations ? <LocationInfo location={location} /> : null}
      </span>
    </div>
  );
}

export default Locations;

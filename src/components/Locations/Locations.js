import { useState, useEffect } from "react";
import "./Locations.css";

export default function Locations() {
  const [button, setButton] = useState("Show Locations");
  const [locations, setLocations] = useState([]);
  const locationsAPI = "/locations.json";

  useEffect(() => {
    fetch(locationsAPI)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  function handleSetState() {
    button === "Hide Locations"
      ? setButton("Show Locations")
      : setButton("Hide Locations");
  }

  function handleName() {
    setLocations([...locations.sort((a, b) => (a.name > b.name ? 1 : -1))]);
  }

  function handleClimate() {
    setLocations([
      ...locations.sort((a, b) => (a.climate > b.climate ? 1 : -1)),
    ]);
  }

  function handleTerrain() {
    setLocations([
      ...locations.sort((a, b) => (a.terrain > b.terrain ? 1 : -1)),
    ]);
  }

  return (
    <div className="locations">
      <h2>List Of Locations</h2>
      <button className="button" onClick={handleSetState}>
        {button}
      </button>

      {button === "Hide Locations" ? (
        <>
          <button classsname="button" onClick={handleName}>
            Sort By Name
          </button>
          <button onClick={handleClimate}>Sort By Climate</button>
          <button onClick={handleTerrain}>Sort By Terrain</button>

          <ul>
            {locations.map((place) => {
              return (
                <li key={place.id} className="location-card">
                  <ul>
                    <li>
                      Name:<span className="text">{place.name}</span>
                    </li>
                    <li>
                      Climate:<span className="text">{place.climate}</span>
                    </li>
                    <li>
                      Terrain:<span className="text">{place.terrain}</span>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
}

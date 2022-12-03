import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Locations() {
  const { data: locations, isPending, error } = useFetch("/locations.json");
  const [showLocations, setShowLocations] = useState(false);

  return (
    <section className="locations">
      <h2>List of Locations</h2>

      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {locations && (
        <button onClick={() => setShowLocations(!showLocations)}>
          {showLocations ? "Hide" : "Show"} Locations
        </button>
      )}
      {showLocations && (
        <ul>
          {locations.map((location) => (
            <li key={location.name}>
              <ul className="details">
                <li>
                  <span>Name:</span>
                  {location.name}
                </li>
                <li>
                  <span>Climate:</span>
                  {location.climate}
                </li>
                <li>
                  <span>Terrain:</span>
                  {location.terrain}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

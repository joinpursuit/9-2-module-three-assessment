import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import LocationList from "../components/LocationList";

export default function Locations() {
  const { data: locations, isPending, error } = useFetch("/locations.json");
  const [showLocations, setShowLocations] = useState(false);

  return (
    <section className="locations">
      <h2>List of Locations</h2>

      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {locations && (
        <div className="btn-wrapper">
          <button onClick={() => setShowLocations(!showLocations)}>
            {showLocations ? "Hide" : "Show"} Locations
          </button>
          <button>Sort By Name</button>
          <button>Sort By Climate</button>
          <button>Sort By Terrain</button>
        </div>
      )}
      {showLocations && <LocationList locations={locations} />}
    </section>
  );
}

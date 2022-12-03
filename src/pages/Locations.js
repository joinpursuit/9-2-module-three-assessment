import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import LocationList from "../components/LocationList";

export default function Locations() {
  const { data: locations, isPending, error } = useFetch("/locations.json");
  const [showLocations, setShowLocations] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function sortLocation() {
    return !sortBy
      ? locations
      : locations.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }

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

          {showLocations && (
            <>
              <button onClick={() => setSortBy("name")}>Sort By Name</button>
              <button onClick={() => setSortBy("climate")}>
                Sort By Climate
              </button>
              <button onClick={() => setSortBy("terrain")}>
                Sort By Terrain
              </button>
            </>
          )}
        </div>
      )}
      {showLocations && <LocationList locations={sortLocation()} />}
    </section>
  );
}

import React from "react";

function LocationFilter({ data }) {
  return (
    <div className="data">
      <br />
      <ul className="info" key={data.id}>
        {data.map((l) => (
          <li key={l.id}>
            <p> Name: {l.name}</p>

            <br />
            <p>Climate: {l.climate}</p>

            <br />
            <p>Terrain: {l.terrain}</p>

            <br />
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default LocationFilter;

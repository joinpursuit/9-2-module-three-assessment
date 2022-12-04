import { useState, useEffect } from "react";

export default function Locations() {
  const [locationsArr, setLocationsArr] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("./locations.json")
      .then((response) => response.json())
      .then((data) => setLocationsArr(data))
      .catch((error) => console.error(error));
  }, [locationsArr.length]);

  function sortBy(e) {
    const tempArr = [...locationsArr];
    const sortingMethod = e.target.value;

    tempArr.sort((a, b) => {
      if (a[sortingMethod] < b[sortingMethod]) {
        return -1;
      } else if (a[sortingMethod] > b[sortingMethod]) {
        return 1;
      } else return 0;
    });

    setLocationsArr([...tempArr]);
  }

  return (
    <aside className="locations route">
      <p className="page-title">List of Locations</p>
      <div className="buttons">
        <button
          className="locations-button"
          onClick={(e) => {
            setButtonClicked(!buttonClicked);
          }}
        >
          {buttonClicked ? "Hide Locations" : "Show Locations"}
        </button>
        {buttonClicked ? (
          <>
            <button className="locations-button" value="name" onClick={sortBy}>
              Sort by Name
            </button>
            <button
              className="locations-button"
              value="climate"
              onClick={sortBy}
            >
              Sort by Climate
            </button>
            <button
              className="locations-button"
              value="terrain"
              onClick={sortBy}
            >
              Sort by Terrain
            </button>
          </>
        ) : null}
      </div>

      {buttonClicked ? (
        <ul>
          {locationsArr.map((location) => {
            return (
              <li key={location.id}>
                <ul>
                  <li>
                    <span>Name: {location.name}</span>
                  </li>
                  <li>
                    <span>Climate: {location.climate}</span>
                  </li>
                  <li>
                    <span>Terrain: {location.terrain}</span>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      ) : null}
    </aside>
  );
}

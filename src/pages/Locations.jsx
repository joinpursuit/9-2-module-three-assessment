import { useEffect, useState } from "react";
const Locations = () => {
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState("");
  const [locations, setLocations] = useState([]);

  const getData = async () => {
    try {
      const url = `${process.env.REACT_APP_API}/locations`;
      const res = await fetch(url);
      const data = await res.json();
      setLocations(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderLocations = () => {
    if (!show) return;
    let sortedLocs = [...locations];
    if (sort) {
      sortedLocs.sort((a, b) => {
        if (a[sort] > b[sort]) return 1
        else if(a[sort] < b[sort]) return -1;
        return 0;
      });
    }

    const locs = sortedLocs.map((l, i) => (
      <li key={`${l.name}-${i}`}>
        <ul>
          <li>
            <span>Name: </span>
            <span>{l.name}</span>
          </li>
          <li>
            <span>Climate: </span>
            <span>{l.climate}</span>
          </li>
          <li>
            <span>Terrain: </span>
            <span>{l.terrain}</span>
          </li>
        </ul>
      </li>
    ));

    return <ul>{locs}</ul>;
  };

  const renderSortBtns = () => {
    return <>
      <button className={sort === "name" && "active"} onClick={() => setSort("name")}>SORT BY NAME</button>
      <button className={sort === "climate" && "active"} onClick={() => setSort("climate")}>SORT BY CLIMATE</button>
      <button className={sort === "terrain" && "active"} onClick={() => setSort("terrain")}>SORT BY TERRAIN</button>
      </>
  }

  return (
    <div className="locations center">
      <h1>List of Locations</h1>
      <div className="btns">
        <button onClick={() => setShow(!show)}>
          {show ? "HIDE" : "SHOW"} LOCATIONS
        </button>
        {show && renderSortBtns()}
      </div>
      {renderLocations()}
    </div>
  );
};

export default Locations;

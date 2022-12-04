import { useState, useEffect } from "react";
// import LocationsClimate from "./LocationsClimate";
import LocationsName from "./LocationsNames";
// import LocationsNameSort from "./LocationsNameSort";
// import LocationsName from "./LocationsNames";
// import LocationsTerrain from "./LocationsTerrain";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [hide, setHide] = useState(false);
  const [masterState, setMasterState] = useState([]);


  const [names, setNames] = useState([]);
  const [climates, setClimates] = useState([]);
  const [terrains, setTerrains] = useState([]);

  const [nameSort, setNameSort] = useState(false);
  const [climateSort, setClimateSort] = useState(false);
  const [terrainSort, setTerrainSort] = useState(false);

  const dataGhibli = require("./locations.json");

  useEffect(() => {
    //   fetch(dataGhibli)
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    //   console.log(data)

    setLocations(dataGhibli);
    setMasterState(dataGhibli)
  }, [dataGhibli]);

  useEffect(() => {
    let theLocality = locations;

    if (nameSort) {
      setClimateSort(false);
      setTerrainSort(false);
      sorttheVALUES(theLocality, "name");
      setNames(theLocality);
    } else {
    }
  }, [nameSort, locations]);

  useEffect(() => {
    let theLocality = locations;

    if (climateSort) {
      setNameSort(false);
      setTerrainSort(false);
      sorttheVALUES(theLocality, "climate");
      setClimates(theLocality);
    } else {
    }
  }, [climateSort, locations]);

  useEffect(() => {
    let theLocality = locations;

    if (terrainSort) {
      setNameSort(false);
      setClimateSort(false);
      sorttheVALUES(theLocality, "terrain");
      setTerrains(theLocality);
    } else {
    }
  }, [terrainSort, locations]);

  function sorttheVALUES(array, value) {
    array.sort((a, b) => {
      if (a[value] < b[value]) {
        return -1;
      }
      if (a[value] > b[value]) {
        return 1;
      }
      return 0;
    });

    array.map((local) => {
      return local;
    });
  }

  function handleHide() {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  }


useEffect(()=>{
    if (nameSort) {setMasterState(names)} 
},[nameSort,names])

useEffect(()=>{
    if (climateSort) {setMasterState(climates)} 
},[climateSort,climates])

useEffect(()=>{
    if (terrainSort) {setMasterState(terrains)} 
},[terrainSort,terrains])




const buttonInstructionsStyle= {
    fontSize:"12px"
}

const buttonHIDE= {
    borderRadius: "10%",
    backgroundColor:"gray",
    marginBottom:"10px"

}

console.log(masterState)




  return (
    <div className="locations">
                <h1>List of Locations</h1>
                <p style={buttonInstructionsStyle}>Whenever a "sort" button is clicked, it should sort the data alphabetically even if the content is hidden.</p>

      <button style={buttonHIDE} onClick={handleHide}>
        {" "}
        {hide ? "Hide Locations" : "Show Locations"}
      </button>
      <br/><div></div>
      <button onClick={() => setNameSort(true)}> Sort By Name </button>
      <button onClick={() => setClimateSort(true)}> Sort By Climate </button>
      <button onClick={() => setTerrainSort(true)}> Sort By Terrain </button>

      <ul className="no-bullets">
        {hide
          ?  masterState.map((local) => {
              return <li key={local.id}><LocationsName local={local} /></li>;
            })
          : null}






      </ul>
    </div>
  );
}

export default Locations;

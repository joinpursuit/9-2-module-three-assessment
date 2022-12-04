import { useEffect, useState } from "react";

const locations_json = "/locations.json";

export default function Locations() {
  const [toggle, setToggle] = useState(false);
    const [allLocations, setAllLocations] = useState([]);
    const [sortedLocations, setSortedLocations] = useState([])
    const [sortToggle, setSortToggle] = useState(false)

  useEffect(() => {
    fetch(locations_json)
      .then((res) => res.json())
      .then(setAllLocations);
  }, []);
  
   function helperFunction(property) {
      let sortOrder = 1;
  
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
  
      return function (a,b) {
          if(sortOrder == -1){
              return b[property].localeCompare(a[property]);
          }else{
              return a[property].localeCompare(b[property]);
          }        
      }
  }
    
    function handleSorting(e) {
        e.preventDefault()
        setSortToggle(!sortToggle)
        console.log(e.target.id)


        if (e.target.id === "sort-name") {
            allLocations.sort(helperFunction("name"))
        } else if (e.target.id === "sort-climate") {
            allLocations.sort(helperFunction("climate"))
        } else if (e.target.id === "sort-terrain") {
            allLocations.sort(helperFunction("terrain"))
        }


    }

    console.log(allLocations);
    


  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={() => setToggle(!toggle)}>
        {!toggle ? "Show Locations" : "Hide Locations"}
          </button>
          <button id="sort-name" onClick={handleSorting}>Sort by Name</button>
          <button id="sort-climate" onClick={handleSorting}>Sort by Climate</button>
          <button id="sort-terrain" onClick={handleSorting}>Sort by Terrain</button>
        {toggle && (
          <div>
            {allLocations.map(({ name, climate, terrain, id }) => {
              return (
                <ul key={id}>
                  <li>
                    <ul>
                      <li>Name: {name}</li>
                      <li>Climate: {climate}</li>
                      <li>Terrain: {terrain}</li>
                    </ul>
                  </li>
                </ul>
              );
            })}
          </div>
          )}
          
    </div>
  );
}

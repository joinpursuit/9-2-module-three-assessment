import { useEffect } from "react"
import { useState } from "react"

export default function LocationsPage() {
    const [clicked, setClicked] = useState(false)
    const [locations, setLocations] = useState([])
    
    function handleClick() {
        setClicked(!clicked)
    }

    function getLocations() {
        return fetch("locations.json").then(response => response.json())
    }

    function handleSortByName() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.name > locationB.name) return 1
            if (locationA.name < locationB.name) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    function handleSortByClimate() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.climate > locationB.climate) return 1
            if (locationA.climate < locationB.climate) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    function handleSortByTerrain() {
        const locationsCopy = [...locations];
        locationsCopy.sort((locationA, locationB) => {
            if (locationA.terrain > locationB.terrain) return 1
            if (locationA.terrain < locationB.terrain) return -1
            return 0
        })
        setLocations(locationsCopy);
    }

    useEffect(() => {
        getLocations().then(response => {
            setLocations(response)
        })
    }, [])

  return (
    <div className='locations'>
        <h2>List of Locations</h2>
        <button onClick={handleClick}>{clicked ? "Hide Locations" : "Show Locations"}</button>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByClimate}>Sort by Climate</button>
        <button onClick={handleSortByTerrain}>Sort by Terrain</button>
        <ul>
            {clicked ? locations.map(location => {
                return (
                <li key={location.id}>
                    <ul>
                        <li>Name: {location.name}</li>
                        <li>Climate: {location.climate}</li>
                        <li>Terrain: {location.terrain}</li>
                    </ul>
                </li>
            )}) : null }
        </ul>
    </div>
  )
}

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

    useEffect(() => {
        getLocations().then(response => {
            setLocations(response)
        })
    }, [])

  return (
    <div className='locations'>
        <h2>List of Locations</h2>
        <button onClick={handleClick}>{clicked ? "Hide Locations" : "Show Locations"}</button>
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

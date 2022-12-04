export function getFlims(){
    return fetch("films.json").then((response) => response.json())
}

export function getAllPeople(){
    return fetch("people.json").then((response) => response.json())
}

export function getLocations(){
    return fetch("locations.json").then((response) => response.json())
}
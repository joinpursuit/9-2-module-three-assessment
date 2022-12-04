const matchup = {
    movies:"films.json",
    people:"people.json",
    locations:"locations.json"
}
const fetchApi = (text)=>{
    return fetch(matchup[text]).then((response) => response.json())   
}

export {fetchApi}
const uri = {
  movies:"films.json",
  people:"people.json",
  locations:"locations.json",
};


const fetchApi = (text)=>{
  return fetch(uri[text]).then((response) => response.json())   
}
export {
  fetchApi
}
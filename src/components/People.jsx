import { useEffect, useState } from "react";

const people_json = "/people.json";

export default function People() {
  const [allPeople, setAllPeople] = useState([]);
  const [searchPerson, setSearchPerson] = useState("");
  const [foundPerson, setFoundPerson] = useState();

  useEffect(() => {
    fetch(people_json)
      .then((res) => res.json())
      .then(setAllPeople);
  }, []);

  function filterSearch() {
    const filterSearch = allPeople.find((person) =>
      person.name.toLowerCase().includes(searchPerson)
    );
    setFoundPerson(filterSearch);
  }

  function handleSearch(e) {
    e.preventDefault();
    filterSearch();

    setSearchPerson("");
  }

  // console.log(searchPerson)
  console.log(foundPerson);
  return (
    <div>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSearch}>
        <input
          value={searchPerson}
          onChange={(e) => setSearchPerson(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        {foundPerson ? (
          <>
            <h2>Name: {foundPerson.name}</h2>
            <p>Age: {foundPerson.age}</p>
            <p>Gender: {foundPerson.gender}</p>
            <p>Eye Color: {foundPerson.eye_color}</p>
            <p>Hair Color: {foundPerson.hair_color}</p>
          </>
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </div>
  );
}

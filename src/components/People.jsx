import { useEffect, useState } from "react";

const people_json = "/people.json";

export default function People() {
  const [allPeople, setAllPeople] = useState([]);
  const [searchPerson, setSearchPerson] = useState("");
  const [foundPerson, setFoundPerson] = useState(null);

  useEffect(() => {
    fetch(people_json)
      .then((res) => res.json())
      .then(setAllPeople);
  }, []);

  function filterSearch() {
    const filterSearch = allPeople.find((person) =>
      person.name.toLowerCase().includes(searchPerson)
    );
    filterSearch ? setFoundPerson(filterSearch) : setFoundPerson("");
  }

  function handleSearch(e) {
    e.preventDefault();
    filterSearch();

    setSearchPerson("");
  }

  return (
    <div className="people">
      <section>
        <h2>Search for a Person</h2>
        <form onSubmit={handleSearch}>
          <input
            value={searchPerson}
            onChange={(e) => setSearchPerson(e.target.value)}
            required
          />
          <button>Search</button>
        </form>
      </section>

      {foundPerson && (
        <aside>
          <h3>Name: {foundPerson.name}</h3>
          <span>Age:</span> {foundPerson.age}
          <br />
          <span>Gender:</span> {foundPerson.gender}
          <br />
          <span>Eye Color:</span> {foundPerson.eye_color}
          <br />
          <span>Hair Color:</span> {foundPerson.hair_color}
        </aside>
      )}
      {foundPerson === "" && <p>Not Found</p>}
    </div>
  );
}

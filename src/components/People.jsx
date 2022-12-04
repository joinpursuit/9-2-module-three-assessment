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

  function handleSearch(e) {
    e.preventDefault();
    const filterSearch = allPeople.find(
      (person) => person.name.toLowerCase() === searchPerson.trim()
    );
    filterSearch ? setFoundPerson(filterSearch) : setFoundPerson(0);

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

      {foundPerson === 0 ? (
        <p className="not-found">Not Found</p>
      ) : foundPerson ? (
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
      ) : null}
    </div>
  );
}

import { useState, useEffect } from "react";

import Person from "../components/Person";

export default function People() {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");

  function fetchPeople() {
    return fetch("people.json").then((response) => response.json());
  }

  function fetchSelectedPerson() {
    const selectPerson = people.filter((person) => {
      return person.name.toLowerCase() === search.toLowerCase();
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSelectedPerson(fetchSelectedPerson);
  }

  useEffect(() => {
    fetchPeople()
      .then((persons) => {
        setPeople([...persons]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e)}
        ></input>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {selectedPerson ? <Person selectPerson={selectedPerson} /> : null}
    </div>
  );
}

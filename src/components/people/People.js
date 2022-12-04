import React, { useState } from "react";
import Person from "./Person";
import Nope from "./Nope";

function People({ people }) {
  const [person, setPerson] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const selectedPerson = people.filter((person) => person.name === searchInput);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function sendPerson() {
    setPerson(selectedPerson);
  }

  return (
    <div className="people">
      <h2> Select a Person </h2>
      <br />
      <div className="search">
        <div className="searchPerson">
          <input
            value={searchInput}
            onChange={handleChange}
            id="searchPerson"
            type="text"
            placeholder="Search for a person"
          />
          <button onClick={sendPerson} type="submit">
            Search
          </button>
        </div>
      </div>
      {selectedPerson ? <Person person={person} /> : <Nope />}
    </div>
  );
}

export default People;

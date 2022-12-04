import React from "react";
import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [foundName, setFoundName] = useState();

  useEffect(() => {
    fetch("people.json")
      .then((response) => response.json())
      .then(setPeople);
  }, []);

  function findBySearch() {
    const findName = people.find(
      (person) => person.name.toLowerCase() === search.toLowerCase()
    );
    setFoundName(findName);
  }

  function handleSubmit(e) {
    e.preventDefault();
    findBySearch();
    setSearch("");
  }
 

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="search"
        ></input>
        <button>Submit</button>
      </form>
      {foundName ? (
        <aside>
          <h3>Name: {foundName.name} </h3>
          <p>Age: {foundName.age}</p>
          <p>Eye Color: {foundName.eye_color}</p>
          <p>Hair Color: {foundName.hair_color}</p>
        </aside>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

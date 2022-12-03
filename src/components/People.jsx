import React from "react";
import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState();

  useEffect(() => {
    fetch("people.json")
      .then((response) => response.json())
      .then(setPeople);
  }, []);

  function filterBySearch() {
    const filterName = people.find(
      (person) => person.name.toLowerCase() === search.toLowerCase()
    );
    setFilteredName(filterName);
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterBySearch();
    setSearch("");
  }
  //   console.log(filteredName);

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
      {filteredName ? (
        <aside>
          <h3>Name: {filteredName.name} </h3>
          <p>Age: {filteredName.age}</p>
          <p>Eye Color: {filteredName.eye_color}</p>
          <p>Hair Color: {filteredName.eye_color}</p>
        </aside>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

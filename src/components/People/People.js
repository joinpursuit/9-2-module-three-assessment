import { useEffect, useState } from "react";
import "./People.css";

export default function People() {
  const [person, setPerson] = useState("");
  const [search, setSearch] = useState("");
  const [allPeople, setAllPeople] = useState([]);
  const [searchMade, setSearchMade] = useState(false);
  // const [notFound, setNotFound] = useState(false);

  const peopleAPI = "/people.json";

  function handleSubmit(e) {
    e.preventDefault();
    setSearch("");
    setSearchMade(true);
    const result = filterPeople(search, allPeople);
    setPerson(result);
  }

  function filterPeople(search, people) {
    return people.filter((person) => {
      return person.name.toLowerCase().match(search.toLowerCase());
    });
  }

  useEffect(() => {
    fetch(peopleAPI)
      .then((response) => response.json())
      .then((data) => {
        setAllPeople(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleTextChange(e) {
    const nameInput = e.target.value;
    setSearch(nameInput);
  }

  console.log(person);

  return (
    <div className="people">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search For A Person</label>
          <input
            id="search"
            type="text"
            onChange={handleTextChange}
            value={search}
          ></input>
          <button>submit</button>
        </form>
      </div>

      {searchMade && person.length !== 1 && <h4 className="person">Not Found</h4>}
      {searchMade && person.length === 1 && (
        <div className="person">
          <h4>
            Name: <span>{person[0]?.name}</span>
          </h4>
          <h4>
            Eye Color: <span>{person[0]?.eye_color}</span>
          </h4>
          <h4>
            Hair Color: <span>{person[0]?.hair_color}</span>
          </h4>
        </div>
      )}
    </div>
  );
}

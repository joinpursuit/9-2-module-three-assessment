import { useState, useEffect } from "react";

export default function People() {
  const [peopleArr, setPeopleArr] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("./people.json")
      .then((response) => response.json())
      .then((data) => setPeopleArr(data))
      .catch((error) => console.error(error));
  }, [peopleArr.length]);

  function handleTextChange(event) {
    setTextInput(event.target.value);
  }

  function handleSubmit(event) {
    const tempArr = [];
    event.preventDefault();

    peopleArr.map((person) => {
      if (person.name.toLowerCase().includes(textInput.toLowerCase())) {
        tempArr.push(person);
      } else {
        return null;
      }
    });

    setSearchResult([...tempArr]);
    setTextInput("");
  }

  return (
    <aside className="people route">
      <p className="page-title">Search for a Person</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleTextChange}
          value={textInput}
        />
        <button>Submit</button>
      </form>

      {searchResult.length ? (
        <aside className="search-result">
          {searchResult.map((person) => {
            return (
              <div className="array-result" key={person.id}>
                <h1>{person.name}</h1>
                <p>
                  <b>Age:</b> {person.age}
                </p>
                <p>
                  <b>Eye Color:</b> {person.eye_color}
                </p>
                <p>
                  <b>Hair Color:</b> {person.hair_color}
                </p>
              </div>
            );
          })}
        </aside>
      ) : (
        <p>No Results Found</p>
      )}
    </aside>
  );
}

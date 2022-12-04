import React, { useEffect, useState } from "react";
import "./people.json";
const People = () => {
  const [data, setData] = useState([]);
  const peopleData = require("./people.json");

  useEffect(() => {
    setData(peopleData);
  }, [peopleData]);
  console.log(peopleData);

  const [name, setName] = useState("");
  const [found, setFound] = useState(null);

  function formChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function peopleDisplay(e) {
    e.preventDefault();
    const showpeople = data.find((d) => d.name === name);

    showpeople ? setFound(showpeople) : setFound("");
  }
  return (
    <div className="people">
      <h1> Search for a Person</h1>
      <form onSubmit={peopleDisplay}>
        <input type="text" value={name} onChange={formChange}></input>
        <button type="submit">Submit</button>
      </form>
      {found ? (
        <div>
          <h1>
            <strong>Name: </strong> {found.name}
          </h1>
          <br />
          <span>Age: {found.age}</span>
          <br />
          <span>Eye Color: {found.eye_color} </span>
          <br />
          <span>Hair Color: {found.hair_color}</span>
        </div>
      ) : found === "" ? (
        <p>Not Found</p>
      ): null}
    </div>
  );
};

export default People;

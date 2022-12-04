import React from "react";

function Person({ person }) {
  if (person.length === 0) {
    return (
      <div key={person.id}>
        <p>"Nothing Found"</p>
      </div>
    );
  }
  return (
    <div className="person">
      {person.map((p) => (
        <div key={p.id}>
          <>
            <header>Name: {p.name}</header>
            <p>Age: {p.age}</p>
            <p>Gender: {p.gander}</p>
          </>
        </div>
      ))}
    </div>
  );
}

export default Person;

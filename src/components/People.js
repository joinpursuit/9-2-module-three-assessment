import React from "react";
import { useState } from "react";

const People = ({ dataPersons }) => {
  const [matchingPersons, setMatchingPersons] = useState([]);
  const [firstSearch, setFirstSearch] = useState(true);

  const handleTextChange = (event) => {
    event.preventDefault();
    const search = event.target.search.value.toLowerCase();
    setFirstSearch(false);

    if (search.length === 0) {
      setMatchingPersons([]);
      return;
    }

    const peoples = dataPersons.filter((data) => {
      const person = data.name.toLowerCase();

      // console.log(person);
      if (person.includes(search)) {
        return data;
      }
      // else {
      //   return setIsSearch(false);
      // }
    });

    setMatchingPersons(peoples);
  };

  console.log(matchingPersons.length);

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form className="cont-submit" onSubmit={handleTextChange}>
        Search person:
        <input type="text" name="search" id="searchPeople" />
        <button>SUBMIT</button>
      </form>
      {/* ////////////////// */}
      {!firstSearch && matchingPersons.length === 0 ? (
        <p>Not Found</p>
      ) : (
        matchingPersons.map((personIndiv) => {
          return (
            <div key={personIndiv.id}>
              <h1>
                <b>Name: </b>
                {personIndiv.name}
              </h1>
              <p>
                <b>Age: </b>
                {personIndiv.age}
              </p>
              <p>
                <b>Eye Color: </b>
                {personIndiv.eye_color}
              </p>
              <p>
                <b>Hair Color: </b>
                {personIndiv.hair_color}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default People;

//  {
//    matchingPersons.length > 0
//      ? matchingPersons.map((personIndiv) => {
//          return (
//            <div key={personIndiv.id}>
//              <h1>
//                <b>Name: </b>
//                {personIndiv.name}
//              </h1>
//              <p>
//                <b>Age: </b>
//                {personIndiv.age}
//              </p>
//              <p>
//                <b>Eye Color: </b>
//                {personIndiv.eye_color}
//              </p>
//              <p>
//                <b>Hair Color: </b>
//                {personIndiv.hair_color}
//              </p>
//            </div>
//          );
//        })
//      : "Not Found";
//  }

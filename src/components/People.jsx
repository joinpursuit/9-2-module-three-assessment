import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const PEOPLE_GHIBLI_API = "/people.json";

function People() {
  const [people, setPeople] = useState([]);
  const [searchPeople, setSearch] = useState("");
  const [searchResult, setResult] = useState();

  useEffect(() => {
    fetch(PEOPLE_GHIBLI_API)
      .then((response) => response.json())
      .then(setPeople);
  }, []);

  function findPeople(e) {
    e.preventDefault();
    setResult(
      people.filter((person) =>
        person.name.toLowerCase().startsWith(searchPeople.toLowerCase())
      )
    );
  }

  return (
    <div className="people">
      <h3>Search for a Person</h3>
      <Form onSubmit={findPeople}>
        <input
          type="text"
          value={searchPeople}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>Submit</Button>
      </Form>
      {searchResult ? (
        searchResult.length ? (
          searchResult.map((result) => (
            <div key={result.id} className="person">
              <h4>Name: {result.name}</h4>
              <p>Age: {result.age}</p>
              <p>Eye Color: {result.eye_color}</p>
              <p>Hair Color: {result.hair_color}</p>
            </div>
          ))
        ) : (
          <span>Not Found</span>
        )
      ) : (null)
      }
    </div>
  );
}

export default People;

import { useEffect, useState } from "react";
import { getAllPeople } from "../../api/fetch";
import Person from "./Person";

export default function People() {
  const [LoadingError, setLoadingError] = useState(false);
  const [people, setPeople] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [searchPeople, setSearchPeople] = useState("");
  const [searchError, SetSearchError] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    getAllPeople()
      .then((response) => {
        setAllPeople(response);
        setPeople(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }, []);

  function filterPeople(search, people) {
    return people.filter((person) => {
      return person.name.toLowerCase().match(search.toLowerCase());
    });
    // When .filter does not find something that corresponds to the condition, it returns an empty array
  }

  function handleTextChange(event) {
    const person = event.target.value;

    setSearchPeople(person);
  }

  function handleSubmit(event){
    event.preventDefault();

    setSearch(true);
    
    let result = filterPeople(searchPeople, allPeople);
    if(result.length > 0){
      setPeople(result);
      SetSearchError(false);
    }
    else  { 
      SetSearchError(true);
    }
    setSearchPeople("")
  }

  console.log(searchError, "search error");
  return (
    <div className="people">
      {LoadingError ? 
        "Error"
       : (
      <section className="shows-index-wrapper">
        <h2>Search for People</h2>
        <br />
        <label htmlFor="searchPeople">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchPeople}
              id="searchPeople"
              onChange={handleTextChange}
            />
            <button>SUBMIT</button>
          </form>
        </label>
        <section className="shows-index">
          {/* {
            searchError ? "Not Found" : 
            people.map((person) => {
              return <Person person={person} key={person.id} />;
            })
          } */}
            {
            searchError ? "Not Found" : 
            <Person people={people} search={search} />
            }
        </section>
      </section>
    )}
    </div>
  );
}

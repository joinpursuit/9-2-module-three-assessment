import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Person from "../components/Person";

export default function People() {
  const { data: people, isPending, error } = useFetch("/people.json");
  const [person, setPerson] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = e.target.name.value;
    const found = people.find(
      (person) => person.name.toLowerCase() === selected.trim().toLowerCase()
    );
    e.target.reset();
    found ? setPerson(found) : setPerson("");
  };

  return (
    <section className="people">
      <h2>Search for a Person</h2>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {people && (
        <form onSubmit={handleSubmit}>
          <label>
            <input name="name" type="text" />
          </label>
          <button>SUBMIT</button>
        </form>
      )}
      <Person person={person} />
    </section>
  );
}

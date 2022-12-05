import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Person from "../components/Person";

export default function People() {
  const { data: people, isPending, error } = useFetch("/people.json");
  const [person, setPerson] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = people.find(
      (person) => person.name.toLowerCase() === name.trim().toLowerCase()
    );
    setName("");
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
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button>SUBMIT</button>
        </form>
      )}
      <Person person={person} />
    </section>
  );
}

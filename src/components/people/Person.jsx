export default function Person({ people, search }) {
  return (
    <div>
      {search &&
        people.map((person) => {
          return (
            <article key={person.id} >
              <h3>Person: {person.name}</h3>
              <aside className="details">
                <p>
                  <span>Age:</span>
                  {person.age}
                </p>
                <p>
                  <span>Eye Color:</span> {person.eye_color}
                </p>
                <p>
                  <span>Hair Color:</span> {person.hair_color}
                </p>
              </aside>
            </article>
          );
        })}
    </div>
  );
}

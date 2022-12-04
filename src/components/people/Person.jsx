export default function Person({person}){
    // console.log(person);
    return (
        <article >
        <h3>
          Person: {person.name}
        </h3>
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
    )
}
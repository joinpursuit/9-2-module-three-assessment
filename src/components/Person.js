export default function Person({ person }) {
  return (
    <>
      {person && (
        <aside>
          <h3>Name:{person.name}</h3>
          <p>
            <span>Age:</span>
            {person.age}
          </p>
          <p>
            <span>Eye Color:</span>
            {person.eye_color}
          </p>
          <p>
            <span>Hair Color:</span>
            {person.hair_color}
          </p>
        </aside>
      )}
      {person === "" && (
        <div className="found-person">
          <p>Not found!</p>
        </div>
      )}
    </>
  );
}

export default function Person({ selectPerson }) {
  return (
    <div className="person">
      <h2>Name: {selectPerson.name}</h2>
      <p>Age: {selectPerson.age}</p>
      <p>Eye color: {selectPerson["eye_color"]}</p>
      <p>Hair color: {selectPerson["hair_color"]}</p>
    </div>
  );
}

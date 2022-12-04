import { useState } from "react"

const People = () => {
  const [selected, setSelected] = useState(null);
  const [person, setPerson] = useState("");

  const renderPeople =  () => {
    if (!selected) return;
    if (!selected.id) return <section><h2>Not Found</h2></section>;

    return (
      <section>
        <h2><strong>Name:</strong> {selected.name}</h2>
        <p><strong>Age:</strong> {selected.age}</p>
        <p><strong>Eye Color:</strong> {selected.eye_color}</p>
        <p><strong>Hair Color:</strong> {selected.hair_color}</p>
      </section>
    )
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API}/people?name=${person}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setSelected(data[0] || {});
    }catch(err) {
      console.log(err)
    }
    setPerson("");
  }

  return (
    <div className="people center">
      <form onSubmit={handleSubmit}>
        <label forhtml="person">Search for a Person</label>
        <input id="person" type="text" value={person} onChange={e => setPerson(e.target.value)} />
        <button>Submit</button>
      </form>
      {renderPeople()}
    </div>
  )
}

export default People

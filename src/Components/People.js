import { useState, useEffect } from "react";


import "./people.json";
// import PeopleDetailsSpecific from "./PeopleDetailsSpecific";

function People() {
  // const [details, setDetails] = useState("SelectGhibliTitle");

  const [data, setData] = useState([]);
  const [people, setPeople] = useState("");
  //For Search Bar
  const [input, setInput] = useState("Search for a Person");
  //   useEffect(()=>{
  //     setInput(input)

  // },[input])

//   const [found, setFound] = useState(true);



  const dataGhibli = require("./people.json");
  useEffect(() => {
    //   fetch(dataGhibli)
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    //   console.log(data)

    setData(dataGhibli);
  }, [dataGhibli]);

  function submit(e) {
    e.preventDefault();
    setPeople(`${input}`);
    setInput("")
  }

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  function MouseOver() {

    if((input==="Search for a Person" || input ===0)){
setInput("")
}
else{}
}


 

  return (
    <div className="people">
        <h1>Search for a Person</h1>

      <form onSubmit={submit}>
        <input
          onChange={handleOnChange}
          onMouseOver={MouseOver}
        //   onMouseLeave={onMouseLeave}
          type="text"
          id="name"
          name="name"
          value={input}
          required
        />
        <button>Search</button>
      </form>


      <div>
        {/* <PeopleDetailsSpecific data={data} people={people} /> */}
        { data.map((renderDetails) => {
          if ((people.toLowerCase()).includes(((renderDetails.name).toLowerCase()))) {
            return (
              <div key={renderDetails.id}>
                <h1>{renderDetails.name}</h1>
  
                <h4>GENDER: {renderDetails.gender}</h4>
  
                <p><strong>AGE:</strong> {renderDetails.age}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
   
      </div>


</div>
  );
}

export default People;

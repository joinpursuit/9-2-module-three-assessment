
import { useEffect, useState } from "react";
import { fetchApi } from "../components/fetch";
import MessageBoard from "./Add-ons/messageBoard";
import "./people.css";

export default function People() {
  const [ messages, setMessages ] = useState([]);
  const [ searchText, setSearchText ] = useState("");
  const [ people, setPeople ] = useState([]);
  const [ peopleDisplay, setpeopleDisplay ] = useState([]);
  const on_search_submit = (evt)=>{
    evt.preventDefault();
    setpeopleDisplay(people.filter(el=>el.name.toLowerCase().match(searchText.toLowerCase())));
  }
  const on_message_remove = (id)=>{
    messages.splice(id,1);
    setMessages([...messages]);
  }
  useEffect(() => {
    fetchApi("people")
      .then(data => {
        setPeople(data);
      })
      .catch(function (error) {
        setMessages(pv => pv.concat({ text: error.toString(), title: "fetch error", mode: "is-danger" }));
      });
  }, [])
  return (
    <>
      <div style={{color:"red"}}  className="people">
        <h4 style={{color:"red"}} className="title is-2 has-text-centered mt-2-text-font-fantasy">Search for a Person</h4>
        <form onSubmit={on_search_submit}>
          <div className="has-text-centered">
            <div className=" is-inline-block">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="text" placeholder="Find a repository" 
                  value={searchText} onChange={(e)=>setSearchText(e.currentTarget.value)}/>
                </div>
                <div className="control">
                  <button className="button is-info">Search Please</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        
        <div style={{margin:"0px 0px",color:"red"}} className="peopleList">
          {peopleDisplay.length>-0
            ?
            peopleDisplay.map((el,idx)=><div key={idx}>
              <h6 style={{color:"red"}}><strong>Character:</strong>{el.name}</h6>
              <p style={{color:"red"}}><strong>Age: </strong>{el.age}</p>
              <p style={{color:"red"}}><strong>Eye Color: </strong>{el.eye_color}</p>
              <p style={{color:"red"}}><strong>Hair Color: </strong>{el.hair_color}</p>
            </div>)
            :
            
            <div className= "button is-info">Person not found!</div>
            
          }
            </div>
      </div>
      
      <div className="formessageboard">{messages.map((el,idx)=><MessageBoard key={`messages${idx}`} message={el} remove={()=>on_message_remove(idx)} />)}</div>
    </>
  )
}
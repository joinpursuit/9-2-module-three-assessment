import { useEffect, useState } from "react";
import { fetchApi } from "../fetch";
import MessageBoard from "./sub/messageBoard";
import "./locations.css";


const compareFn = {
  name:(a,b)=>{
    return a.name.localeCompare(b.name);
  },
  climate:(a,b)=>{
    return a.climate.localeCompare(b.climate);
  },
  terrain:(a,b)=>{
    return a.terrain.localeCompare(b.terrain);
  },
}

export default function Locations() {
  const [ locations, setLocations] = useState([]);
  const [ messages, setMessages ] = useState([]);
  const [ ShowHide, SetShowHide ] = useState(false);
  const [ sortFunction, setSortFunction ] = useState(undefined);
  //event///////////////////////////////////////////////////////////////////////
  const on_message_remove = (id)=>{
    messages.splice(id,1);
    setMessages([...messages]);
  }
  const on_sort_click = (evt)=>{
    let btns = evt.currentTarget.querySelectorAll(".button");
    for(let x of btns)
    {
      x.classList.remove("is-success");
      x.classList.remove("is-selected");
    }
    evt.target.classList.add("is-success");
    evt.target.classList.add("is-selected");
    switch(evt.target.innerHTML)
    {
      case "Sort by Name":
        setSortFunction("name")
      break;
      case "Sort by Climate":
        setSortFunction("climate")
      break;
      case "Sort by Terrain":
        setSortFunction("terrain")
      break;
      default:
        setSortFunction(undefined)
    }
    
  }
  const on_show_button_click = (evt)=>{
    if(ShowHide) 
      evt.currentTarget.innerHTML="Show Locations"
    else
      evt.currentTarget.innerHTML="Hide Locations"

    SetShowHide(pv=>!pv);
  }
  ///////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchApi("locations")
    .then(data => {
      // console.log("success", data);
      setLocations(data);
    })
    .catch(function (error) {
      setMessages(pv=>pv.concat({text:error.toString(),title:"Fetch Error",mode:"is-danger"}));
      // console.log("error", error);
    });
  }, [])
  ///////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="locations">
        <h4 className="title is-4 has-text-centered mt-3">List of Locations</h4>
        <div className="buttonContainer">
          <button style={{margin:"0px 10px"}} className="button is-dark" onClick={on_show_button_click}>Show Locations</button>
          {
            ShowHide
            ?
              <div className="buttons has-addons" onClick={on_sort_click}>
                <button className="button">Sort by Name</button>
                <button className="button">Sort by Climate</button>
                <button className="button">Sort by Terrain</button>
              </div>
            :""
          }
        </div>
        {
          ShowHide
          ?
            <div className="locationsList">
              {locations.sort(compareFn[sortFunction]).map((el,idx)=><div key={idx}>
                <h6><strong>Name: </strong>{el.name}</h6>
                <p><strong>Climate: </strong>{el.climate}</p>
                <p><strong>Terrain: </strong>{el.terrain}</p>
              </div>)}
            </div>
          :""
        }
      </div>
      <div className="formessageboard">{messages.map((el,idx)=><MessageBoard key={`messages${idx}`} message={el} remove={()=>on_message_remove(idx)} />)}</div>
    </>
  )
}
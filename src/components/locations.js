
import { useEffect, useState } from "react";
import { fetchApi } from "../components/fetch";
import MessageBoard from "../components/Add-ons/messageBoard";
import "./locations.css";


const compareFn = {
  name:(a,b)=>{
    return a.name.localeCompare(b.name);
  },
  terrain:(a,b)=>{
    return a.terrain.localeCompare(b.terrain);
  },
  climate:(a,b)=>{
    return a.climate.localeCompare(b.climate);
  },
  
}

export default function Locations() {
  const [ locations, setLocations] = useState([]);
  const [ messages, setMessages ] = useState([]);
  const [ ShowHide, SetShowHide ] = useState(false);
  const [ sortFunction, setSortFunction ] = useState(undefined);
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
      case "Sort by Terrain":
        setSortFunction("terrain")
        break;
      case "Sort by Climate":
        setSortFunction("climate")
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
  useEffect(() => {
    fetchApi("locations")
    .then(data => {
      setLocations(data);
    })
    .catch(function (error) {
      setMessages(pv=>pv.concat({text:error.toString(),title:"Fetch Error",mode:"is-danger"}));
    });
  }, [])
  


  return (
    <>
      <div className="locations">
        <h4 style={{color:"red"}} className="title is-2 has-text-centered mt-2">Locations</h4>
        <div className="buttonContainer">
          <button style={{margin:"0px 0px",color:"blue"}} className="button is-light" onClick={on_show_button_click}>View Locations</button>
          {
            ShowHide
            ?
              <div style={{margin:"0px 8px",color:"red"}} className="buttons has-addons" onClick={on_sort_click}>
                <button style={{margin:"0px 8px",color:"red"}} className="button">Sort by Name
                </button>
                <button  style={{margin:"0px 8px",color:"red"}} className="button">Sort by Terrain
                </button>
                <button  style={{margin:"0px 8px",color:"red"}} className="button">Sort by Climate
                </button>
              </div>
            :""
          }
        </div>
        {
          ShowHide
          ?
            <div style={{margin:"0px 8px",color:"red"}} className="locationsList">
              {locations.sort(compareFn[sortFunction]).map((el,idx)=><div key={idx}>
                <h6 style={{margin:"0px 8px",color:"red"}}> 
                <strong>Name:</strong>{el.name}
                </h6 >
                <p style={{margin:"0px 8px",color:"red"}}> 
                <strong>Terrain:</strong>{el.terrain}
                </p>
                <p style={{margin:"0px 8px",color:"red"}}> 
                <strong>Climate:</strong>{el.climate}
                </p>
              </div>)}
            </div>
          :""
        }
      </div>
      <div className="formessageboard">{messages.map((el,idx)=><MessageBoard key={`messages${idx}`} message={el} remove={()=>on_message_remove(idx)} />)}</div>
    </>
  )
}
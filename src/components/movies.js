
import { useEffect, useState } from "react";
import { fetchApi } from "../components/fetch";
import MessageBoard from "../components/Add-ons/messageBoard";
import "./movies.css";

export default function Movies() {
  const [ movies, setMovies] = useState([]);
  const [ messages, setMessages ] = useState([]);
  const [ movieDetail, setMovieDetail ] = useState({});
  const on_message_remove = (id)=>{
    messages.splice(id,1);
    setMessages([...messages]);
  }
  const on_dropdown_changed = (evt) =>{
    console.log(evt.currentTarget.value)
    setMovieDetail({...movies[evt.currentTarget.value]||{}});
  }
 
  useEffect(() => {
    fetchApi("movies")
    .then(data => {
      setMovies(data);
      
    })
    .catch(function (error) {
      setMessages(pv=>pv.concat({text:error.toString(),title:"Fetch Error",mode:"is-danger"}));
      });
  }, [])

  return (
    <>
      <div style={{color:"red"}} className="movies">
        <h4 style={{margin:"0px 0px",color:"red"}} className="title is-2 has-text-centered mt-2"><strong>Select a Movie!</strong></h4>
        <div className="has-text-centered">
          <div className="select is-inline-block" >
            <select onChange={on_dropdown_changed}>
              <option>Please select!</option>
              {movies.map((el,idx)=>
              <option key={el.id} value={idx}>{el.title}
              </option>)}
            </select>
          </div>
        </div>
        {movieDetail['title']
          ?
          
          <div>
            <nav className="panel m-1">
              <p style={{margin:"0px 0px",color:"orange"}} className="panel-heading">
                <strong>Title: 
                </strong>{movieDetail.title}
              </p>
              <div style={{margin:"0px 0px",color:"orane"}} className="panel-flexbox">
              <p><strong>Release Date: 
                </strong>{movieDetail.release_date}
                </p>
              </div>
              <div style={{margin:"0px 0px",color:"orange"}} className="panel-flexbox">
                <p><strong>Description: </strong>{movieDetail.description}
                </p>
              </div>
            </nav>
          </div>
          :
          ""}
        
      </div>
      <div className="formessageboard">{messages.map((el,idx)=>
      <MessageBoard 
      key={`messages${idx}`} 
      message={el} remove={()=>on_message_remove(idx)} />)}
      </div>
    </>
  )
}
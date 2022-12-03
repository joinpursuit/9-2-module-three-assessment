import { useEffect, useState } from "react";
import { fetchApi } from "../fetch";
import MessageBoard from "./sub/messageBoard";

export default function Movies() {
  const [ movies, setMovies] = useState([]);
  const [ messages, setMessages ] = useState([]);
  const [ movieDetail, setMovieDetail ] = useState({});
  //event///////////////////////////////////////////////////////////////////////
  const on_message_remove = (id)=>{
    messages.splice(id,1);
    setMessages([...messages]);
  }
  const on_dropdown_changed = (evt) =>{
    //
    console.log(evt.currentTarget.value)
    setMovieDetail({...movies[evt.currentTarget.value]||{}});
  }
  /////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchApi("movies")
    .then(data => {
      // console.log("success", data);
      setMovies(data);
      // return data;
    })
    .catch(function (error) {
      setMessages(pv=>pv.concat({text:error.toString(),title:"Fetch Error",mode:"is-danger"}));
      // console.log("error", error);
      // return { error }
    });
  }, [])

  return (
    <>
      <div className="movies">
        <h4 className="title is-4 has-text-centered mt-3">Select a Movies</h4>
        <div className="has-text-centered">
          <div className="select is-inline-block" >
            <select onChange={on_dropdown_changed}>
              <option>Select dropdown</option>
              {movies.map((el,idx)=><option key={el.id} value={idx}>{el.title}</option>)}
            </select>
          </div>
          
        </div>
        {movieDetail['title']
          ?
          
          <div>
            <nav className="panel m-6">
              <p className="panel-heading">
                <strong>Title: </strong>{movieDetail.title}
              </p>
              <div className="panel-block">
                <p><strong>Release Date: </strong>{movieDetail.release_date}</p>
              </div>
              <div className="panel-block">
                <p><strong>Description: </strong>{movieDetail.description}</p>
              </div>
              
            </nav>
          </div>
          :
          ""}
        
      </div>
      <div className="formessageboard">{messages.map((el,idx)=><MessageBoard key={`messages${idx}`} message={el} remove={()=>on_message_remove(idx)} />)}</div>
    </>
  )
}
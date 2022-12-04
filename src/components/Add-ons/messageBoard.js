
import { useEffect } from "react";
import "../messageBoard.css";
import "../locations.css";

export default function MessageBoard({message,remove}) {
  const {text,title,mode} = message;
 

  const on_delete_click = (remove_method)=>{
    //
    remove_method();
  }
  useEffect(()=>{
    
  },[])
  return (
    <article className={`message ${mode}`}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete" onClick={()=>on_delete_click(remove)}>
        </button>
      </div>
      <div className="message-body">{text}
      </div>
    </article>
  )
}
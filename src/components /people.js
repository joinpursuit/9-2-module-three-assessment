
import { useEffect, useState } from "react";
export default function People() {
  const [ messages, setMessages ] = useState([]);
  const [ searchText, setSearchText ] = useState("");
  const [ people, setPeople ] = useState([]);
  const [ peopleDisplay, setpeopleDisplay ] = useState([]);
  /////////////////////////////////////////////////////////////////////////
  const on_search_submit = (evt)=>{
    evt.preventDefault();
    setpeopleDisplay(people.filter(el=>el.name.toLowerCase().match(searchText.toLowerCase())));
  }
  const on_message_remove = (id)=>{
    messages.splice(id,1);
    setMessages([...messages]);
  }

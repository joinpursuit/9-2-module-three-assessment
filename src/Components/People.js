import { useEffect, useState } from "react"



export default function People(){
    const [form,setForm]=useState()
    const [input,setInput]=useState("")
    const [data,setData]=useState([])
    const [display,setDisplay]=useState(false)
    const [submitted,setSubmitted]=useState(false)
    const [person1,setPerson1]=useState([])

    useEffect(()=>{
        fetch(`people.json`).then(dat=>dat.json()).then(dat=>setData(dat))
        },[])


const person=data.filter(person=>
    person.name.toLowerCase()===input.toLowerCase()
)

    function onSubmit(e){
        e.preventDefault()
       
        console.log(person)
      setSubmitted(true)
      setPerson1(person)
      setDisplay(true)
        
    }
    function handleChange(e){
        e.preventDefault()
        setInput(e.target.value)
        // setDisplay(true)
    }
    
    return (
        <div className="people">
            <div className="people-center">
            <h1>Search for a Person</h1>
            <form onSubmit={onSubmit}>
            <input 
            type="text"
            value={input}
            onChange={handleChange}
        
            />
           <button type="submit">Submit</button>
        </form>
        </div>
        <div className="person-info">
            {!!person1.length&& display&&(
                <div className="people-card">
                   <h1>Name:</h1> <h1>{person1[0].name}</h1>
                   <h3>Age:</h3><span>{person1[0].age}</span>
                    <h3>Eyes:</h3><span>{person1[0].eye_color}</span>
                   <h3>Hair:</h3> <span>{person1[0].hair_color}</span>
                </div>
            )}
            {!person.length&&display&& 
            <p>Not Found</p>}

        
        </div>

        </div>
    )
    }
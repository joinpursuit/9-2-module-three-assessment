import { useEffect, useState } from "react"



export default function Locations(){
const [locations,setLocations]=useState([])
const [display,setDisplay]=useState(false)
const [button,setButton]=useState("Show Locations")

    useEffect(()=>{
        fetch(`locations.json`).then(dat=>dat.json()).then(dat=>setLocations(dat))
        },[])

        // function locationCard(){
        //     console.log(locations)
        //    return <ul> 
            
        //     {locations.map(location=>{
        //       return   <li>
        //             <p>Name:</p><span>{location.name}</span>
        //             <p>Climate:</p><span>{location.climate}</span>
        //             <p>Terrain:</p><span>{location.terrain}</span>



        //         </li>

              
        // })}
        //     </ul>
        // }
    
    return (
        <div className="locations">
            <h1>List of Locations</h1>
           <button onClick={()=>{
            setDisplay(true);
            
            setButton("Hide Locations");
            if (button==="Hide Locations"){
                setButton("Show Locations")
            }
           }}>{button}</button>



            {button==="Hide Locations"?(
           <ul className="ul-grid"> 
            {locations.map(location=>{
              return   <li className="loc">
                     <p>Name:<span className="space">{location.name}</span></p>
                    <p>Climate:<span className="space">{location.climate}</span></p>
                    <p>Terrain:<span className="space">{location.terrain}</span></p>



                </li>

              
        })}
            </ul>):null}
        </div>
        
    )
    }
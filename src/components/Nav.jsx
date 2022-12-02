
import React from "react";
import { Link } from "react-router-dom";



export default function Nav() {

    return(
        <nav>
        <Link to="/"><img src="src/images/studio-ghib-nav.jpeg"  height="50" width="50" /></Link>
        <Link to="/movies"><h3>Movies</h3></Link>
        <Link to="/people"><h3>People</h3></Link>
        <Link to="/locations"><h3>Locations</h3></Link>
        </nav>
    
    );
}
import {Link } from "react-router-dom"


export default function Navbar(){
    
    return (
        <nav>
         

            <Link to="/"><img src="https://dynamic.brandcrowd.com/asset/logo/dbf4eab2-4b6e-4f5e-9470-0fdee430146b/logo-search-grid-1x?v=637974216747270000" alt="logo" className="logo" />
</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/people">People</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    )
}
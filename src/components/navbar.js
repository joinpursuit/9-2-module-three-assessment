//import link from react-router-dom
import { Link } from "react-router-dom";
//export default function navbar
export default function Navbar() {
  return (
    <div className="navbar">
        <Link to="/" className="navbar-selection">
        <img src= "https://www.sunimprint.com/images/San%20Antonio%20Spurs%20KRS-One%20Logo%20iron%20on%20transfers.jpg" width={128} height= {128} alt="logo"/></Link>
      <Link to="/movies" className="navbar-selection">Movies</Link>
      <Link to="/people" className="navbar-selection">People</Link>
      <Link to="/locations" className="navbar-selection">Locations</Link>
    </div>
  )
}

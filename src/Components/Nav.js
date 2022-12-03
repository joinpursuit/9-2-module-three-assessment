import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./totoro-LOGO.png"

function Nav(){
    const navigate= useNavigate()

return(
<nav>
<img onClick={() => {
        navigate('/');
      }} src={(require("./totoro-LOGO.png"))} className="tot-LOGO" alt="totoro-logo"/>
<ul className="no-bullets">


<NavLink
          className="links"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "limegreen" : "white",
          })}
        >Home</NavLink>


<NavLink
          className="links"
          to="/people"
          style={({ isActive }) => ({
            color: isActive ? "limegreen" : "white",
          })}
        >People</NavLink>


<NavLink
          className="links"
          to="/locations"
          style={({ isActive }) => ({
            color: isActive ? "limegreen" : "white",
          })}
        >Locations</NavLink>


<NavLink
          className="links"
          to="/movies"
          style={({ isActive }) => ({
            color: isActive ? "limegreen" : "white",
          })}
        >Movies</NavLink>

</ul>

</nav>

)
}


export default Nav



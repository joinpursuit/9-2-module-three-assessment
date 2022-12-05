import { Link } from "react-router-dom";
export default function Navbar() {

  
  
  
    const on_burger_click = (evt)=>{
    if(evt.target.tagName!=="BUTTON") return;
    evt.target.classList.toggle("is-active");
    document.getElementById(evt.target.getAttribute(["data-target"])).classList.toggle("is-active")
  }
 
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
       <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://i.pinimg.com">
          <img src="https://i.pinimg.com/originals/4d/24/21/4d24214499ae7cc8e8df70d8581863ba.gif" width="50" height="50" alt="Ghost"/>
        </Link>

        <button className="navbar" 
        aria-label="menu" aria-expanded="false" 
        data-target="navbarBasicExample" 
        onClick={on_burger_click}>
          <span aria-hidden="true">
          </span>
          <span aria-hidden="true">
          </span>
          <span aria-hidden="true">
          </span>
        </button>
      </div>

      <div id="navbar" 
             className="navbar-menu">
        <div className="navbar">
          <Link to="/movies" className="navbar-item">
            Movies
          </Link>
          <Link to="/people" className="navbar-item">
            People
          </Link>
          <Link to="/locations" className="navbar-item">
            Locations
          </Link>
        </div>
      </div>
    </nav >
  )
}
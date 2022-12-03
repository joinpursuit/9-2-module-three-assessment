
import { Link } from "react-router-dom";
export default function Navbar() {

  ///////////////////////////////////////////////////////////////////////
  const on_burger_click = (evt)=>{
    if(evt.target.tagName!=="BUTTON") return;
    evt.target.classList.toggle("is-active");
    document.getElementById(evt.target.getAttribute(["data-target"])).classList.toggle("is-active")
  }
  ///////////////////////////////////////////////////////////////////////
  return (
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
       <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma"/>
        </Link>

        <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={on_burger_click}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
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
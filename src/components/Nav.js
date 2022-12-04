import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba6eb16e-7880-45c2-8b26-10db799d9085/d8b80js-2dfedb77-dcb9-42c2-b1c9-241d0bc91866.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhNmViMTZlLTc4ODAtNDVjMi04YjI2LTEwZGI3OTlkOTA4NVwvZDhiODBqcy0yZGZlZGI3Ny1kY2I5LTQyYzItYjFjOS0yNDFkMGJjOTE4NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.i15zWhfEpDd_x4uediN_oadMT7IqZVRr3pa4FDcVz0o"
            alt="logo"
            className="logo-side"
          ></img>
        </Link>
        <ul>
          <Link to="/movies">
            <li>Movies</li>
          </Link>
          <Link to="/people">
            <li>People</li>
          </Link>
          <Link to="/locations">
            <li>Locations</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

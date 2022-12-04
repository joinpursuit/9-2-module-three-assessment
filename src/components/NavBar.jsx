import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import "./NavBar.css";
import * as Icon from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <header className="header">
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#0000",
          top: "0",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <Icon.CameraReelsFill style={{ height: "50", width: "50" }} />{" "}
          <span className="logo"></span>
        </Link>
      </Stack>
      <div className="logo"></div>

      <nav>
        <ul>
          <li>
            <Icon.Film
              style={{
                height: "25",
                width: "auto",
                color: "light-blue",
                marginRight: "-25",
                marginBottom: "5",
              }}
            />
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Icon.PeopleFill
              style={{
                height: "25",
                width: "auto",
                color: "light-blue",
                marginRight: "-25",
                marginBottom: "5",
              }}
            />
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Icon.HouseDoorFill
              style={{
                height: "25",
                width: "auto",
                color: "light-blue",
                marginRight: "-25",
                marginBottom: "5",
              }}
            />
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
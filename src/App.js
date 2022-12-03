import React from "react";
import {BrowserRouter as Router, Routes,Route, } from "react-router-dom"
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";


import "./App.css"
function App() {
  return (


<Router>

< Nav/>
<Routes>

<Route path="/" element={<Home />} />
<Route path="/movies" element={<Movies />} />
<Route path="/people" element={<People />} />
<Route path="/locations" element={<Locations />} />



</Routes>


</Router>



  );
}

export default App;

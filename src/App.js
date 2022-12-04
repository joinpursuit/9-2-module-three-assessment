import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import People from "./Components/People";


function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies />}/>
      <Route path="/people" element={<People />}/>
      <Route path="/locations" element={<Locations />}/>


    </Routes>
   </Router>
  );
}

export default App;

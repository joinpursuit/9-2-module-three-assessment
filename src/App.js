import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Nav from "./components/common/Nav";
// import Footer from "./components/common/Footer";
import Home from "./components/home/Home"
import Movies from "./components/movies/Movies";
import People from "./components/people/People";
import Locations from "./components/locations/Locations";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/movies" element={ <Movies/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/locations" element={<Locations/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>
      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav";
import Movies from "./components/Movies";

function App() {
  return (
    <Router>
<Nav/>
      <div className="app">
        <Routes>
          <Route path="/" element={<h1>Welcome to GhibliApp</h1>} />
          <Route path="/movies" element={ <Movies/>} />
     </Routes>
      
    </div>

    </Router>
  );
}

export default App;

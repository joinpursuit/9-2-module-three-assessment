import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Welcome, Movies, NavBar, People, Location } from "./components/Index";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import Videos from "./components/videos/Videos";
// import Video from "./components/videos/Video";

function App() {
  return (
    <Box sx={{ backgroundColor: "#0000" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

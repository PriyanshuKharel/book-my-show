import "./App.css";
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import Playpage from "./pages/Play.page";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"] = "83f491fddc33cdab46e26fe79b4d00b9";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Moviepage />} />
      <Route path="/plays" element={<Playpage />} />
    </Routes>
  );
}

export default App;

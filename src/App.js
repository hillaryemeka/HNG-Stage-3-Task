import "./index.css"
import Bnb from "./Bnb.js" 
import PlaceToStay from "./PlaceToStay.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Bnb />} />
      <Route path="/placetostay" element={<PlaceToStay />} />
    </Routes>
  </Router>
  );
}

export default App;

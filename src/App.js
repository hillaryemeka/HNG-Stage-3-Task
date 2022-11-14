import "./index.css"
import Bnb from "./Bnb.js" 
import PlaceToStay from "./PlaceToStay";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Bnb />} />
      <Route path="/placeToStay" element={<PlaceToStay />} />
    </Routes>
  </Router>
  );
}

export default App;

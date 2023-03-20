import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Pages/Loading";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Insurance from "./Pages/Insurance";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/insurance" element={<Insurance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

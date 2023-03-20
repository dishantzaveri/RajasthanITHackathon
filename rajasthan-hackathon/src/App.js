import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Insurance from "./Pages/Insurance";
import BusinessLoans from "./Pages/BusinessLoan";
import Loans from "./Pages/Loans";
import Cibil from "./Pages/Cibil";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landing />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/Loan" element={<BusinessLoans />} />
          <Route path="/credit" element={<Cibil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

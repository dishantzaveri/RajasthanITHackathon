import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Insurance from "./Pages/Insurance";
import BusinessLoans from "./Pages/BusinessLoan";
import EducationalLoans from "./Pages/EducationalLoan";
import PersonalLoans from "./Pages/PersonalLoan";
import Loans from "./Pages/Loans";

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
          <Route path="/businessLoans" element={<BusinessLoans />} />
          <Route path="/personalLoans" element={<PersonalLoans />} />
          <Route path="/educationalLoans" element={<EducationalLoans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;    

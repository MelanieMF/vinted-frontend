import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./containers/SignUp";
import Header from "./assets/components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Link to="/offer/:id"> Offre </Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

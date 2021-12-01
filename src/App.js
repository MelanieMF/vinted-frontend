import "./assets/css/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Publish from "./pages/Publish";
import Header from "./components/Header";
import Cookies from "js-cookie";
import CheckoutForm from "./components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const App = () => {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

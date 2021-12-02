// Import internes
import Home from "./containers/Home/Home";
import Offer from "./containers/Offer/Offer";
import SignUp from "./components/UserAccount/SignUp";
import Login from "./components/UserAccount/Login";
import Publish from "./containers/Publish/Publish";
import Header from "./components/Header/Header";
import "./containers/Home/Home.css";

// Import externes
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const App = () => {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [, setData] = useState([]);
  const [, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-backend-melanie.herokuapp.com/offers?title=${search}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <Router>
      <Header token={token} setUser={setUser} setSearch={setSearch} />
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

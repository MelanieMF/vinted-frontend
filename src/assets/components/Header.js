import { Link } from "react-router-dom";
import logo from "../img/logo-vinted.png";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState, useEffect } from "react";
import "../css/Header.css";
import "../css/Buttons.css";
import { useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const [modalSign, setModalSign] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (modalLog || modalSign) {
      document.body.style.overflow = "hidden";
    }
    if (!modalLog && !modalSign) {
      document.body.style.overflow = "unset";
    }
  }, [modalLog, modalSign]);

  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <input type="search" placeholder="Rechercher des articles" />
        <nav>
          {token ? (
            <div>
              <button
                className="logout"
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
              >
                Se déconnecter
              </button>
              <button
                className="header-items blue-btn"
                onClick={() => {
                  setUser(token);
                  navigate("/publish");
                }}
              >
                Vends tes articles
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  setModalSign(true);
                }}
                className="header-items"
              >
                S'inscrire
              </button>

              <button
                onClick={() => {
                  setModalLog(true);
                }}
                className="header-items"
              >
                Se connecter
              </button>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

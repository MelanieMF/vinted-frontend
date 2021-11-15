import { Link } from "react-router-dom";
import logo from "../img/logo-vinted.png";
import "../css/Header.css";
import "../css/Buttons.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <input type="search" placeholder="Rechercher des articles" />
        <nav>
          {token ? (
            <>
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
            </>
          ) : (
            <>
              <Link to="/signup">
                <button className="header-items">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="header-items">Se connecter</button>
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import logo from "../assets/img/logo-vinted.png";
import "../assets/css/Header.css";
import "../assets/css/Buttons.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="search-container">
          <input
            type="search"
            placeholder="Rechercher des articles"
            className="search-input"
          />
          <FontAwesomeIcon icon="search" className="search-input-icon" />
        </div>

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
              <Link to="/signup">
                <button className="header-items">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="header-items">Se connecter</button>
              </Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

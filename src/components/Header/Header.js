import logo from "../../assets/img/logo-vinted.png";
import "../Header/Header.css";
import "../../assets/css/Buttons.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser, setSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="logo-click"
        >
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="search-container">
          <input
            type="search"
            placeholder="Rechercher des articles"
            className="search-input"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
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
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="header-items"
              >
                S'inscrire
              </button>

              <button
                onClick={() => {
                  navigate("/login");
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

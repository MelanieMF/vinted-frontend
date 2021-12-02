import logo from "../../assets/img/logo-vinted.png";
import "../Header/Header.css";
import "../../assets/css/Buttons.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PriceRange from "../../components/PriceRange";

const Header = ({
  token,
  setUser,
  setSearch,
  setFetchRangeValues,
  sortPrice,
  setSortPrice,
}) => {
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
      <div>
        <div
          style={{
            marginTop: 25,
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <span style={{ marginRight: 10 }}>Trier par prix : </span>
          <span className="checkbox">
            <input type="checkbox" checked={sortPrice} name="price" />
            <div
              className="wrapper"
              onClick={() => {
                setSortPrice(!sortPrice);
              }}
            >
              <div className="knob">
                <span>{sortPrice ? "⇣" : "⇡"}</span>
              </div>
            </div>
          </span>
          <span style={{ marginRight: 10 }}>Prix entre : </span>
          <PriceRange setFetchRangeValues={setFetchRangeValues} /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

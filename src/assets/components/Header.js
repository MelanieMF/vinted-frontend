import { Link } from "react-router-dom";
import logo from "../img/logo-vinted.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <input type="search" placeholder="Rechercher des articles" />
        <nav>
          <div className="header-items white-btn buttons">
            <Link to="/signup">S'inscrire</Link>
          </div>
          <div className="header-items white-btn buttons">
            <Link to="/login">Se connecter</Link>
          </div>
          <div className="header-items blue-btn buttons">
            <Link to="/signup">Vends tes articles</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

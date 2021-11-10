import { Link } from "react-router-dom";
import logo from "../img/logo-vinted.png";

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
            <a href="#">S'inscrire</a>
          </div>
          <div className="header-items white-btn buttons">
            <a href="#">Se connecter</a>
          </div>
          <div className="header-items blue-btn buttons">
            <a href="#">Vends tes articles</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

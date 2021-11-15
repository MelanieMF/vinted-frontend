import { Link } from "react-router-dom";
import logo from "../assets/img/logo-vinted.png";
import "../assets/css/Header.css";
import "../assets/css/Buttons.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import SignUp from "./SignUp";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <input type="search" placeholder="Rechercher des articles" />
        <nav>
          <button>
            <SignUp />
          </button>
          <button className="header-items">
            <Link className="link" to="/login">
              Se connecter
            </Link>
          </button>
          {/* <button className="header-items blue-btn">
            <Link className="link white-link" to="/signup">
              Vends tes articles
            </Link>
          </button> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;

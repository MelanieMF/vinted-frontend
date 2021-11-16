import axios from "axios";
import { useState } from "react";
import "../css/SignUp.css";

import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalSign, setModalSign] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleName = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
        setModalSign(false);
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <main className="container">
      <div className="form signup-form">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleName}
              placeholder="Nom d'utilisateur"
              type="text"
              value={username}
            />
          </div>
          <div>
            <input
              onChange={handleEmail}
              placeholder="Email"
              type="email"
              value={email}
            />
          </div>
          <div>
            <input
              onChange={handlePassword}
              placeholder="Mot de passe"
              type="password"
              value={password}
            />
          </div>
          <div>
            <div className="terms-container">
              <input type="checkbox" className="checkbox" />
              <label>S'inscrire à notre newsletter</label>
            </div>
            <p className="terms-bloc">
              En m'inscrivant, je confirme que j'ai accepté les Termes et
              Conditions de Vinted, avoir lu la Politique de Confidentialité, et
              que j'ai plus de 18 ans.
            </p>
            <span style={{ color: "red" }}>{errorMessage}</span>
            <input type="submit" value="S'inscrire" className="blue-btn" />
            <p className="already-account">
              Tu as déjà un compte ? Connecte-toi !
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import Cookies from "js-cookie";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
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
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      // if (error.response.status === 401) {
      //   setErrorMessage("Mauvais email et/ou mot de passe");
      // }
    }
  };

  return (
    <main>
      <div className="container">
        <div className="form">
          <h1>Se connecter</h1>
          <form onSubmit={handleSubmit}>
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
            <div></div>
            <div>
              <input type="submit" value="Se connecter" />
              <span style={{ color: "red" }}>{errorMessage}</span>
              {/* a styliser dans CSS */}
              <p>J'ai oublié mon mot de passe</p>
              <p>Un problème ?</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;

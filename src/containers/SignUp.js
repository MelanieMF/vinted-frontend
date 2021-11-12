import axios from "axios";
import { useState, useEffect } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      // console.log(response.data);
      // setData(response.data);
      // const token = response.data.token;
      // Cookies.set("token", token);
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
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
    <main>
      <div className="container">
        <div className="form">
          <h1>S'inscrire</h1>
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
                placeholder="Password"
                type="password"
                value={password}
              />
            </div>

            <span>
              <input type="checkbox" />
              S'inscrire à notre newsletter
            </span>
            <div>
              <p>
                En m'inscrivant, je confirme que j'ai accepté les Termes et
                Conditions de Vinted, avoir lu la Politique de Confidentialité,
                et que j'ai plus de 18 ans.
              </p>
              <input type="submit" value="S'inscrire" />
              <p>Tu as déjà un compte ? Connecte-toi !</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

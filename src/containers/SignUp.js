import axios from "axios";
import { useState, useEffect } from "react";
import "./SignUp.css";
// import Cookies from "js-cookie";

const SignUp = () => {
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
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
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup"
      );
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="form">
          <h1>S'inscrire</h1>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="Name"></label>
              <input
                onChange={handleName}
                placeholder="Nom d'utilisateur"
                type="text"
                name="name"
                value={name}
              />
            </div>
            <div>
              <label htmlFor="Email"></label>
              <input
                onChange={handleEmail}
                placeholder="Email"
                type="email"
                name="email"
                value={email}
              />
            </div>
            <div>
              <label htmlFor="Mot de passe"></label>
              <input
                onChange={handlePassword}
                placeholder="Password"
                type="password"
                name="password"
                value={password}
              />
            </div>
            <div>
              <div className="cgv-block">
                <div className="newsletter">
                  <input type="checkbox" />
                  <span>S'inscrire à notre newsletter</span>
                </div>
                <div>
                  <p>
                    En m'inscrivant, je confirme que j'ai accepté les Termes et
                    Conditions de Vinted, avoir lu la Politique de
                    Confidentialité, et que j'ai plus de 18 ans.
                  </p>
                </div>
              </div>
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

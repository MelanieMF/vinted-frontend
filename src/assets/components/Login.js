import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalLog, setModalLog] = useState(false);

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
        // navigate("/");
        setModalLog(false);
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
    }
  };

  return (
    <main>
      {modalLog && (
        <div className="container modal">
          <div className="form">
            <h2>Se connecter</h2>
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
                <span style={{ color: "red" }}>{errorMessage}</span>
                <input type="submit" value="Se connecter" />
                <p>J'ai oublié mon mot de passe</p>
                <p>Un problème ?</p>
                <button
                  onClick={() => {
                    setModalLog(false);
                  }}
                >
                  X
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;

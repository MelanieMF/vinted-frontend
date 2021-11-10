import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import backgroundimg from "../assets/img/background-vinted.jpg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <img src={backgroundimg} alt="" className="background" />
      <div className="accroche-container">
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button className="accroche-container-btn button">
          Commencer à vendre
        </button>
      </div>
      <div className="container">
        <div className="products-container">
          {data.offers.map((elem, index) => {
            return (
              <div key={index} className="products-line-container">
                <article>
                  <Link to={`/offer/${elem._id}`}>
                    <h3>{elem.owner.account.username}</h3>
                    <img src={elem.product_image.secure_url} alt="" />
                    <div>
                      <h2>{elem.product_price} €</h2>
                      {elem.product_details.map((item, index) => {
                        return (
                          <div key={index}>
                            <p>{item.MARQUE}</p>
                            <p>{item.TAILLE}</p>
                          </div>
                        );
                      })}
                    </div>
                  </Link>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../assets/css/Buttons.css";
import "../Offer/Offer.css";
import { Link } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-backend-melanie.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <section className="offer-container">
      <div className="offer-picture-container">
        <img
          src={data.product_image.secure_url}
          alt="article"
          className="offer-picture"
        />
      </div>
      <div className="offer-product">
        <div>
          <h3>{data.product_price} €</h3>
          <section className="offer-product-description">
            <div className="offer-product-description-left">
              <ul>
                {data.product_details.map((elem, index) => {
                  const keys = Object.keys(elem);
                  return (
                    <li key={index}>
                      <span>{keys[0]}</span>
                      <span>{elem[keys[0]]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <hr />
          <p>{data.product_name}</p>
          <p>{data.product_description}</p>
          <p>{data.owner.account.username}</p>
          <button className="offer-container-btn blue-btn">
            <Link
              to="/payment"
              className="blue-btn"
              state={{
                title: data.product_name,
                price: data.product_price,
                user: data.owner.account.username,
              }}
            >
              Acheter
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;

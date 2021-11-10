import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <div className="offer-container">
      <div>
        <img src={data.product_image.secure_url} alt="photo de l'article" />
      </div>
      <div className="offer-product-container">
        <div>
          <h3>{data.product_price} €</h3>
          <section className="offer-product-description">
            <div className="offer-product-description-left">
              <p>Marque</p>
              <p>Taille</p>
              <p>État</p>
              <p>Couleur</p>
              <p>Emplacement</p>
            </div>

            <div>
              <p>{data.product_details[0].MARQUE}</p>
              <p>{data.product_details[1].TAILLE}</p>
              <p>{data.product_details[2].ÉTAT}</p>
              <p>{data.product_details[3].COULEUR}</p>
              <p>{data.product_details[4].EMPLACEMENT}</p>
            </div>
          </section>
          <hr />
          <p>{data.product_name}</p>
          <p>{data.product_description}</p>
          <p>{data.owner.account.username}</p>
          <button className="offer-container-btn button">Acheter</button>
        </div>
      </div>
      {/* L'id sur lequel j'ai cliqué est : {id} */}
    </div>
  );
};

export default Offer;

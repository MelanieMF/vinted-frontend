import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundeffect from "../../assets/img/background2.svg";
import "../../assets/css/Buttons.css";
import "../Home/Home.css";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-backend-melanie.herokuapp.com/offers/?&page=${page}&title=${search}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, search]);

  console.log(page);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <section>
      <section>
        <div className="home-bg-container">
          <img src={backgroundeffect} alt="" className="backgroundeffect" />
          <div className="home-bgimg-container">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <button
              className="big-button"
              onClick={() => {
                navigate("/publish");
              }}
            >
              Commencer à vendre
            </button>
          </div>
        </div>
        <div>
          <div className="results-offers">
            <h3>{data.count} offres trouvées </h3>
          </div>
          <div className="container">
            <div className="products-container">
              {data.offers &&
                data.offers.map((elem, index) => {
                  return (
                    <div key={index} className="products-cards-container">
                      <article onClick={() => navigate(`offer/${elem._id}`)}>
                        <div className="products-avatar-owner">
                          {/* {elem.owner && elem.owner.account.avatar && (
                          <img
                            alt={elem.product_name}
                            src={elem.owner.account.avatar.secure_url}
                          />
                        )} */}
                          <p className="user">{elem.owner.account.username}</p>
                        </div>
                        <img src={elem.product_image.secure_url} alt="" />
                        <div>
                          <h2>{elem.product_price} €</h2>
                          <p>{elem.product_name}</p>
                          {elem.product_details.map((item, index) => {
                            return (
                              <div key={index}>
                                <p>{item.MARQUE}</p>
                                <p>{item.TAILLE}</p>
                              </div>
                            );
                          })}
                        </div>
                      </article>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section className="pagination">
        <div className="changepage">
          {page > 0 ? (
            <button
              className="blue-btn"
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Précédent
            </button>
          ) : (
            <div></div>
          )}
          <div className="counter-page">{page}</div>

          {page <= 15 ? (
            <button
              className="blue-btn"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Suivant
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Home;

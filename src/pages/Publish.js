// import "../assets/css/App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  // console.log(token);
  const [file, setFile] = useState();
  const [title, setTitle] = useState("q");
  const [data, setData] = useState("Q");
  const [description, setDescription] = useState("q");
  const [brand, setBrand] = useState("q");
  const [size, setSize] = useState();
  const [color, setColor] = useState("q");
  const [condition, setCondition] = useState("q");
  const [city, setCity] = useState("q");
  const [price, setPrice] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("picture", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", Number(price));
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response.data);
      setData(response.data);
      console.log(response.data);
      navigate(`/offer/${response.data._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <input
            // multiple={true}
            onChange={(event) => setFile(event.target.files[0])}
            type="file"
          />
        </div>
        <div>
          <div>
            <label>
              Titre
              <input
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </label>
          </div>
          <div>
            <label>
              Décris ton article
              <input
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </label>
          </div>
        </div>

        <div>
          <div>
            <label>
              Marque
              <input
                onChange={(event) => setBrand(event.target.value)}
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </label>
          </div>
          <div>
            <label>
              Taille
              <input
                onChange={(event) => setSize(event.target.value)}
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </label>
          </div>
          <div>
            <label>
              Couleur
              <input
                onChange={(event) => setColor(event.target.value)}
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </label>
          </div>
          <div>
            <label>
              Etat
              <input
                onChange={(event) => setCondition(event.target.value)}
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </label>
          </div>
          <div>
            <label>
              Lieu
              <input
                onChange={(event) => setCity(event.target.value)}
                type="text"
                placeholder="ex: Chemise Sézane verte"
              />
            </label>
          </div>
        </div>

        <div>
          <label>
            Prix
            <input
              onChange={(event) => setPrice(event.target.value)}
              type="text"
              placeholder="ex: Chemise Sézane verte"
            />
          </label>
        </div>

        <input type="submit" value="ajouter" className="blue-btn" />
      </form>
      {/* {data && <img src={data.secure_url} alt="" />} */}
    </div>
  );
};

export default Publish;
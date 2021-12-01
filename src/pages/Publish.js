import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropzone from "../components/Dropzone";

import "../assets/css/Home.css";

const Publish = ({ token }) => {
  // console.log(token);
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  // const [data, setData] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState();
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();
  const [, setPreview] = useState();

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
        "https://vinted-backend-melanie.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response.data);
      if (response.data._id) {
        navigate(`/offer/${response.data._id}`);
        // console.log(response.data);
      } else {
        alert("Une erreur est survenue, veuillez réssayer");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="publish-container">
      <h2>Vends ton article</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="element-container">
          <div className="add-picture-button">
            <input
              type="file"
              multiple={true}
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
            <Dropzone setFile={setFile} file={file} />
          </div>
        </div>

        <div className="element-container">
          <div className="field">
            <label>
              Titre
              <input
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                placeholder="ex: Chemise blanche"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Décris ton article
              <input
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                placeholder="ex: porté quelques fois, taille correctement"
              />
            </label>
          </div>
        </div>

        <div className="element-container">
          <div className="field">
            <label>
              Marque
              <input
                onChange={(event) => setBrand(event.target.value)}
                type="text"
                placeholder="ex: Zara"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Taille
              <input
                onChange={(event) => setSize(event.target.value)}
                type="text"
                placeholder="ex: L / 40 / 12"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Couleur
              <input
                onChange={(event) => setColor(event.target.value)}
                type="text"
                placeholder="ex: Blanche"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Etat
              <input
                onChange={(event) => setCondition(event.target.value)}
                type="text"
                placeholder="ex: Neuf avec étiquette"
              />
            </label>
          </div>
          <div className="field">
            <label>
              Lieu
              <input
                onChange={(event) => setCity(event.target.value)}
                type="text"
                placeholder="ex: Paris"
              />
            </label>
          </div>
        </div>

        <div className="element-container">
          <div className="field">
            <label>
              Prix
              <input
                onChange={(event) => setPrice(event.target.value)}
                type="text"
                placeholder="ex: 0,00 €"
              />
            </label>
          </div>
        </div>
        <div className="element-container">
          <input type="checkbox" />
          <span>Je suis intéressé(e) par les échanges</span>
        </div>
        <input type="submit" value="ajouter" className="blue-btn" />
      </form>
      {/* {data && <img src={data.secure_url} alt="" />} */}
    </section>
  );
};

export default Publish;

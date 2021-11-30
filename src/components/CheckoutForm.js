import axios from "axios";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useLocation } from "react-router";
import "../assets/css/CheckoutForm.css";
import "../assets/css/Buttons.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const shippingFees = 0.8;
  const userTaxes = 0.4;
  const total = shippingFees + userTaxes;
  const { title, price, user } = location.state;

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "L'id de l'acheteur",
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: "titre de l'annonce",
        amount: total + price,
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };
  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <ul>
            <li>{title}</li>
            <li>{price} </li>
            <li>{user} </li>
            <li>{shippingFees} </li>
            <li>{userTaxes} </li>
            <li>{total + price} </li>
          </ul>
          <button type="submit" className="blue-btn">
            Valider
          </button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </>
  );
};

export default CheckoutForm;

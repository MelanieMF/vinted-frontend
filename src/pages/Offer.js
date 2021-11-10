import { useParams } from "react-router-dom";

const Offer = () => {
  const { offerId } = useParams();
  //   console.log(productId);
  return (
    <div>
      <h2>Offre</h2>
      L'id sur lequel j'ai cliqué est : {offerId}
    </div>
  );
};

export default Offer;

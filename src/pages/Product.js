import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  //   console.log(productId);
  return (
    <div>
      Product Page
      <br />
      L'id sur lequel j'ai cliqué est : {productId}
    </div>
  );
};

export default Product;

const Home = ({ data }) => {
  return (
    <div>
      {data.offers.map((elem, index) => {
        return <h2>{elem.product_details}</h2>;
      })}
    </div>
  );
};

export default Home;

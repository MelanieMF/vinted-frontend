import { Link } from "react-router-dom";

const About = () => {
  const id = "930294209420";
  return (
    <div>
      About Page
      <Link to={`/product/${id}`}>Go to product</Link>
    </div>
  );
};

export default About;

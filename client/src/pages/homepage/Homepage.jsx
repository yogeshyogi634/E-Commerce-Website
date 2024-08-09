import "./Homepage.scss";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";

const Homepage = () => {
  return (
    <div className="homepage">
      <Slider />
      <FeaturedProducts />
    </div>
  );
};

export default Homepage;

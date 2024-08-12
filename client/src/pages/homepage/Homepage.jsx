import "./Homepage.scss";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

const Homepage = () => {
  return (
    <div className="homepage">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Homepage;

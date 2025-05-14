import "./about.style.css";
import AboutBlog from "./components/aboutBlog";
import BlogReview from "./components/BlogReview";
import Creator from "./components/Creator";
import HeroAboutPage from "./components/HeroAboutPage";
import LocationMap from "./components/LocationMap";
import MotivationalMessage from "./components/MotivationalMessage";

const About = () => {
  return (
    <div>
      <HeroAboutPage />
      <Creator />
      <MotivationalMessage />
      <AboutBlog />
      <BlogReview />
      <LocationMap />
    </div>
  );
};

export default About;

import "./about.style.css";
import BlogReviews from "./components/BlogReview";
import Creator from "./components/Creator";
import HeroAboutPage from "./components/HeroAboutPage";
import MotivationalMessage from "./components/MotivationalMessage";

const About = () => {
  return (
    <div>
      <HeroAboutPage />
      <Creator />
      <MotivationalMessage />
      <BlogReviews />
    </div>
  );
};

export default About;

import "./about.style.css";
import AboutBlog from "./components/aboutBlog";
import BlogReview from "./components/BlogReview";
import Creator from "./components/Creator";
import HeroAboutPage from "./components/HeroAboutPage";
import MotivationalMessage from "./components/MotivationalMessage";

const About = () => {
  return (
    <div>
      <HeroAboutPage />
      <Creator />
      <MotivationalMessage />
      <AboutBlog />
      <BlogReview />
    </div>
  );
};

export default About;

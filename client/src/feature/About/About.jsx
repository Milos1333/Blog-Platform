import "./about.style.css";
import Creator from "./components/Creator";
import HeroAboutPage from "./components/HeroAboutPage";
import MotivationalMessage from "./components/MotivationalMessage";

const About = () => {
  return (
    <div>
      <HeroAboutPage />
      <Creator />
      <MotivationalMessage />
    </div>
  );
};

export default About;

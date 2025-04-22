import { Link } from "react-router-dom";
import "../styles/aboutUs.style.css";

const AboutUs = () => {
  return (
    <div className="home-about">
      <h2 className="home-about-heading">About Us</h2>
      <div className="home-about-content">
        <div className="home-about-text-block">
          <p className="home-about-question">Interested in blogging?</p>
          <h2 className="home-about-title">Create, Share, and Inspire</h2>
          <p className="home-about-paragraph">
            Our platform allows you to easily create and publish your own blog
            posts. Whether you're a passionate writer, an expert in your field,
            or simply love to share your thoughts — this is the place for you.
            Join our growing community of content creators and start making your
            voice heard.
          </p>
          <Link to="/about">
            <button className="home-about-button">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

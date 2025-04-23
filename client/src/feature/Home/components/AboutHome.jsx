import { Link } from "react-router-dom";
import "../styles/aboutHome.style.css";

const AboutHome = () => {
  return (
    <div className="home-about">
      <h2 className="home-about-heading">Who Am I / Why This Blog?</h2>
      <div className="home-about-content">
        <div className="home-about-text-block">
          <p className="home-about-question">Interested in blogging?</p>
          <h2 className="home-about-title">Create, Share, and Inspire</h2>
          <p className="home-about-paragraph">
            This blog is my way of sharing thoughts, design ideas, and personal
            insights. Whether you're here to learn something new, find creative
            inspiration, or just explore – I'm glad you're here. Writing and
            creating is my passion, and this space is where I bring it all
            together.
          </p>
          <Link to="/about">
            <button className="home-about-button">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;

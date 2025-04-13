import { Link } from "react-router-dom";
import "../styles/landingPage.style.css";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="hero-content">
        <h1>Write, share, and inspire with MyBlog</h1>
        <p>
          Open the doors to creativity, connect with the community, and become a
          writer.
        </p>
        <Link to="/home" className="hero-button">
          <button>Join Now</button>
        </Link>
        <div className="scroll-down">&#8595;</div>
      </div>
    </section>
  );
};

export default LandingPage;

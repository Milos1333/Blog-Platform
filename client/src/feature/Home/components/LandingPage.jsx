import { Link } from "react-router-dom";
import "../styles/landingPage.style.css";

const LandingPage = ({ isLoggedIn }) => {
  return (
    <section className="landing-page">
      <div className="hero-content">
        <h1>Write, share, and inspire with MyBlog</h1>
        <p>
          Open the doors to creativity, connect with the community, and become a
          writer.
        </p>

        {isLoggedIn ? (
          <a href="#scroll-section" className="hero-button">
            <button
              onClick={() => {
                document
                  .querySelector(".platform-stats-container")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Scroll More
            </button>
          </a>
        ) : (
          <Link to="/login" className="hero-button">
            <button>Log in</button>
          </Link>
        )}

        <div className="scroll-down">&#8595;</div>
      </div>
    </section>
  );
};

export default LandingPage;

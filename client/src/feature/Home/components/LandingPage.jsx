import { Link } from "react-router-dom";
// import "./landingPage.style.css";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="hero-content">
        <h1>
          Dobrodošli na <span>MyBlog</span>
        </h1>
        <p>Piši, čitaj i poveži se sa zajednicom koja deli tvoju strast.</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn primary-btn">
            Započni pisanje
          </Link>
          <Link to="/blog" className="btn secondary-btn">
            Pregledaj blogove
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

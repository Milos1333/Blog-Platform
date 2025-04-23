import React from "react";
import { Link } from "react-router-dom";
import "../styles/heroAboutPage.style.css";

const HeroAboutPage = () => {
  return (
    <div className="hero-about-us">
      <div className="overlay">
        <div className="about-hero-container">
          <h5 className="subheadline">
            A space where creativity meets curiosity, and ideas become stories.
          </h5>
          <h1 className="main-headline">
            What is <span>MY BLOG?</span>
          </h1>
          <p className="description-about">
            Whether you're here to learn, explore, or simply find inspiration —
            this blog brings together design, development, and storytelling into
            one unique journey. Everyone’s welcome to discover, share, and grow.
          </p>
          <button>View more</button>
        </div>
      </div>
    </div>
  );
};

export default HeroAboutPage;

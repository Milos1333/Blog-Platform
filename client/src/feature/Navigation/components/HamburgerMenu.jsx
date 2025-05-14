import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import "./hamburgerMenu.style.css";
import userImage from "../../../assets/user.png";
import HomeImg from "../../../assets/home.png";
import AboutImg from "../../../assets/about.png";
import BlogImg from "../../../assets/blog.png";
import PageImg from "../../../assets/page.png";
import ContactImg from "../../../assets/contact.png";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`hamburger-wrapper ${menuOpen ? "active" : ""}`}>
      <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
      </div>

      <div className="hamburger-menu">
        <div className="nav-item">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="link">
            Home
            <img src={HomeImg} width="20px" />
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="link"
          >
            About
            <img src={AboutImg} width="20px" />
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink
            to="/createBlog"
            onClick={() => setMenuOpen(false)}
            className="link"
          >
            Create Blog <img src={BlogImg} width="20px" />
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink
            to="/pages"
            onClick={() => setMenuOpen(false)}
            className="link"
          >
            Pages
            <img src={PageImg} width="20px" />
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="link"
          >
            Contact
            <img src={ContactImg} width="20px" />
          </NavLink>
        </div>

        <div className="nav-menu-links">
          <div className="nav-menu-link">
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Log in
            </Link>
          </div>
          <img src={userImage} width="50px" />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

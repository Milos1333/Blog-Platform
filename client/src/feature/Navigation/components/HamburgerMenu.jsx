import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import "./hamburgerMenu.style.css";
import userImageDefault from "../../../assets/NavigationImages/user.png";
import HomeImg from "../../../assets/NavigationImages/home.png";
import AboutImg from "../../../assets/NavigationImages/about.png";
import BlogImg from "../../../assets/NavigationImages/blog.png";
import PageImg from "../../../assets/NavigationImages/page.png";
import ContactImg from "../../../assets/NavigationImages/contact.png";

const HamburgerMenu = ({
  isLoggedIn,
  setShowModal,
  username,
  userImage,
  handleAvatarClick,
}) => {
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
            to="/blogs"
            onClick={() => setMenuOpen(false)}
            className="link"
          >
            Blogs
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
          {!isLoggedIn ? (
            <div className="nav-menu-link">
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Log in
              </Link>
            </div>
          ) : (
            <div className="nav-menu-link">
              <p
                className="username-nav"
                onClick={() => {
                  setMenuOpen(false);
                  handleAvatarClick();
                }}
              >
                {username}
              </p>
              <p onClick={() => setShowModal(true)}>Log out</p>
            </div>
          )}
          <div className="image-username">
            {isLoggedIn ? (
              <img
                src={userImage}
                className="avatar-image"
                onClick={() => {
                  setMenuOpen(false);
                  handleAvatarClick();
                }}
              />
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <img
                  src={userImageDefault}
                  alt="Guest avatar"
                  className="guest-image"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

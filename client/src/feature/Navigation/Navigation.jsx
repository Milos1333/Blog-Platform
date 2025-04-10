import "./navigation.style.css";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="nav-logo">
        <h3>
          My<span>Blog</span>
        </h3>
      </div>
      <div className="nav-center">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/pages"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Pages
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact
        </NavLink>
      </div>
      <div className="nav-auth">
        <div className="nav-auth-links">
          <Link to="/register" className="nav-register-link">
            Register
          </Link>
          <span>/</span>
          <Link to="/login" className="nav-login-link">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

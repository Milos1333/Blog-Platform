import HamburgerMenu from "./components/HamburgerMenu";
import "./navigation.style.css";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="nav-logo">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h3>
            My<span>Blog</span>
          </h3>
        </Link>
      </div>
      <div className="nav-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Create
        </NavLink>
        <NavLink
          to="/my-blogs"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          My Blogs
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
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navigation;

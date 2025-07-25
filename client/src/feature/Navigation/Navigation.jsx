import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import "./navigation.style.css";
import DeleteModal from "../../components/deleteModal/deleteModal";
import { useToast } from "../../components/Toast/Toast";
import { useNavigate } from "react-router-dom";

const Navigation = ({
  isLoggedIn,
  setIsLoggedIn,
  username,
  userImage,
  setUsername,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { show } = useToast();
  const navigate = useNavigate();
  const handleAvatarClick = () => {
    navigate("/blogs?my=true");
  };

  const handleLogOut = () => {
    localStorage.clear();
    setUsername("");
    setIsLoggedIn(false);
    show("success", "Success", "You have successfully logged out.");
  };

  return (
    <>
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
            to="/createBlog"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Create
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </div>

        <div className="nav-auth">
          {!isLoggedIn ? (
            <div className="nav-auth-links">
              <Link to="/register" className="nav-register-link">
                Register
              </Link>
              <span>/</span>
              <Link to="/login" className="nav-login-link">
                Log in
              </Link>
            </div>
          ) : (
            <>
              <div className="nav-auth-links">
                <p
                  className="nav-register-link"
                  onClick={() => setShowModal(true)}
                >
                  Log out
                </p>
              </div>
              <img
                src={isLoggedIn ? userImage : null}
                width="20px"
                height="20px"
                className={isLoggedIn ? "image-avatar" : ""}
                onClick={handleAvatarClick}
              />
            </>
          )}

          <HamburgerMenu
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setShowModal={setShowModal}
            username={username}
            userImage={userImage}
            handleAvatarClick={handleAvatarClick}
          />
        </div>
      </nav>

      <DeleteModal
        visible={showModal}
        setVisible={setShowModal}
        onConfirm={handleLogOut}
        title="Confirm Log Out"
        message="Are you sure you want to log out?"
      />
    </>
  );
};

export default Navigation;

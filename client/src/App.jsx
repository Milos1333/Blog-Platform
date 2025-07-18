import "./App.css";
import Home from "./feature/Home/Home";
import Navigation from "./feature/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./feature/Footer/Footer";
import About from "./feature/About/About";
import CreateBlog from "./feature/createblog/CreateBlog";
import ScrollToTop from "./components/ScrollToTop";
import BlogsPage from "./feature/Blogs/BlogsPage";
import Contact from "./feature/Contact/Contact";
import Login from "./feature/Auth/Login/Login";
import Register from "./feature/Auth/Register/Register";
import { ToastProvider } from "./components/Toast/Toast";
import { useState, useEffect } from "react";
import ApiService from "./core/ApiService";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoadingBlogs(true);
      const data = await ApiService.getPosts();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoadingBlogs(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  return (
    <BrowserRouter>
      <ToastProvider>
        <Navigation
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
        />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home isLoggedIn={isLoggedIn} blogs={blogs} />}
          />
          <Route path="about" element={<About />} />
          <Route
            path="createBlog"
            element={
              <CreateBlog fetchBlogs={fetchBlogs} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route
            path="blogs/:category?"
            element={
              <BlogsPage
                blogs={blogs}
                loading={loadingBlogs}
                setBlogs={setBlogs}
                username={username}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
            }
          />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;

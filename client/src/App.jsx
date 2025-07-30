import "./App.css";
import Home from "./feature/Home/Home";
import Navigation from "./feature/Navigation/Navigation";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Footer from "./feature/Footer/Footer";
import About from "./feature/About/About";
import CreateBlog from "./feature/CreateBlog/CreateBlog";
import ScrollToTop from "./components/ScrollToTop";
import BlogDetails from "./feature/Blogs/components/BlogDetailsWrapper";
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
  const [userImage, setUserImage] = useState(
    localStorage.getItem("userImage") || ""
  );

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
    localStorage.setItem("userImage", userImage);
  }, [userImage]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const BlogDetailsWrapper = ({ blogs }) => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) return <div>Blog not found</div>;

    return <BlogDetails blog={blog} />;
  };

  return (
    <BrowserRouter>
      <ToastProvider>
        <Navigation
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={username}
          userImage={userImage}
          setUsername={setUsername}
        />

        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home isLoggedIn={isLoggedIn} blogs={blogs} />}
          />
          <Route
            path="about"
            element={
              <About
                isLoggedIn={isLoggedIn}
                username={username}
                userImage={userImage}
              />
            }
          />
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
            path="blog/:id"
            element={<BlogDetailsWrapper blogs={blogs} />}
          />
          <Route
            path="login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setUsername={setUsername}
                setUserImage={setUserImage}
              />
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

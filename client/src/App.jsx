import "./App.css";
import Home from "./feature/Home/Home";
import Navigation from "./feature/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./feature/Footer/Footer";
import About from "./feature/About/About";
import CreateBlogPost from "./feature/CreateBlog/CreateBlog";
import ScrollToTop from "./components/ScrollToTop";
import Blogs from "./feature/Blogs/Blogs";
import Contact from "./feature/Contact/Contact";
import Login from "./feature/Auth/Login/Login";
import Register from "./feature/Auth/Register/Register";
import { ToastProvider } from "./components/Toast/Toast";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  return (
    <>
      <BrowserRouter>
        <ToastProvider>
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="about" element={<About />} />
            <Route path="createBlog" element={<CreateBlogPost />} />
            <Route path="blogs/:category?" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="register" element={<Register />} />
          </Routes>
          <Footer />
        </ToastProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

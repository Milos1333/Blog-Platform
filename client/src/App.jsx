import "./App.css";
import Home from "./feature/Home/Home";
import Navigation from "./feature/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./feature/Footer/Footer";
import About from "./feature/About/About";
import CreateBlogPost from "./feature/CreateBlog/CreateBlog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="createBlog" element={<CreateBlogPost />} />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

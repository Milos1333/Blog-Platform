import "./App.css";
import Home from "./feature/Home/Home";
import Navigation from "./feature/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./feature/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

import "./App.css";
import Home from "./feature/Home/Home";
import Navigation from "./feature/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      </BrowserRouter>
    </>
  );
};

export default App;

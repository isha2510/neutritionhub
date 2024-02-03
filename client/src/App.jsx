import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./features/Home/Home";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>


  </div>
);
export default App;

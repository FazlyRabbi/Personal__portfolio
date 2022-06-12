import React from "react";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./container/ProjectDetails/ProjectDetails";
import Home from "./container/Home/Home";
import Blog from "./componests/Blog/Blog";
import Contact from "./componests/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/project/:title" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

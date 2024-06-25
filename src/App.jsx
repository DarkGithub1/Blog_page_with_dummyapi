import React from "react";
import Blog from "./pages/Blog";
import { Route, Routes } from 'react-router-dom'
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
};

export default App;

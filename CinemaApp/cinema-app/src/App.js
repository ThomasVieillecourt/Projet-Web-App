import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discovery from "./Pages/Discovery";
import Home from "./Pages/Home";
import Like from "./Pages/Like";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/discovery" element={<Discovery />}></Route>
        <Route path="/bookmarked" element={<Like />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

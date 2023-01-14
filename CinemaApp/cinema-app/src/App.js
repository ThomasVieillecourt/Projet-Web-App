import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discovery from "./Pages/Discovery";
import Home from "./Pages/Home";
import Like from "./Pages/Like";
import { createContext } from "react";
import ToggleBtn from "./Components/ToggleBtn";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <div className="switch">
          <ToggleBtn toggleTheme={toggleTheme} theme={theme} />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/discovery" element={<Discovery />}></Route>
            <Route path="/bookmarked" element={<Like />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

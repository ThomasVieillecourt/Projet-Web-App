import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ToggleBtn = ({ toggleTheme, theme }) => {
  return (
    <div className="toggle-mode">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={toggleTheme}
        checked={theme === "light"}
      />
      <label htmlFor="checkbox" className="label">
        <FontAwesomeIcon icon={faSun} className="nav-icon" />
        <FontAwesomeIcon icon={faMoon} className="nav-icon" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ToggleBtn;

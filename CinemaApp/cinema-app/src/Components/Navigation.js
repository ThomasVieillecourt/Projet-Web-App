import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookmark,
  faCompass,
  faClock,
  faUsers,
  faStar,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = ({}) => {
  return (
    <div className="navigation">
      <ul className="navigation__content">
        <h3>MENU</h3>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="navigation__content-list">
            <FontAwesomeIcon icon={faHouse} className="nav-icon" />
            <p>Home</p>
          </li>
        </NavLink>
        <NavLink
          to="/discovery"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigation__content-list">
            <FontAwesomeIcon icon={faCompass} className="nav-icon" />
            <p>Discovery</p>
          </li>
        </NavLink>
        <NavLink
          to="/bookmarked"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigation__content-list">
            <FontAwesomeIcon icon={faBookmark} className="nav-icon" />
            <p>Bookmarked</p>
          </li>
        </NavLink>
        <div className="navSeparator"></div>
        <h3 id="commingSoon">COMING SOON</h3>

        <li className="navigation__content-list">
          <FontAwesomeIcon icon={faClock} className="nav-icon" />
          <p>Recent</p>
        </li>
        <li className="navigation__content-list">
          <FontAwesomeIcon icon={faStar} className="nav-icon" />
          <p>Top Rated</p>
        </li>
        <li className="navigation__content-list">
          <FontAwesomeIcon icon={faUsers} className="nav-icon" />
          <p>Community</p>
        </li>

        <div className="toggle-mode">
          <input type="checkbox" class="checkbox" id="checkbox" />
          <label for="checkbox" class="label">
            <FontAwesomeIcon icon={faSun} className="nav-icon" />
            <FontAwesomeIcon icon={faMoon} className="nav-icon" />
            <div class="ball"></div>
          </label>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;

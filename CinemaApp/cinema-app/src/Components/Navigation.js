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
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="container">
      <div className="navigation">
        <ul className="navigation__content">
          <h3>MENU</h3>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
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
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

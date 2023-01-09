import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <ul className="header-nav-left">
        <li id="movie">Movies</li>
        <li id="serie">Series</li>
        <li>TV Shows</li>
      </ul>
      <ul className="header-nav-right">
        <li>
          <FontAwesomeIcon icon={faWifi} className="nav-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faBell} className="nav-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} className="nav-icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;

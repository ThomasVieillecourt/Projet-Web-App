import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

const Header = ({ modifysetIdData }) => {
  let typeData;

  return (
    <header>
      <ul className="header-nav-left">
        <li
          id="movie"
          onClick={(e) => {
            typeData = e.target.id;
            if ((typeData = "serie")) {
              modifysetIdData("trending/movie/week");
            }
          }}
        >
          Movies
        </li>
        <li
          id="serie"
          onClick={(e) => {
            typeData = e.target.id;
            if ((typeData = "serie")) {
              modifysetIdData("tv/popular");
            }
          }}
        >
          Series
        </li>
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

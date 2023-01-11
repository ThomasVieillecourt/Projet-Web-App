import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

const HeaderAlt = ({}) => {
  return (
    <header>
      <ul className="header-nav-left"></ul>
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

export default HeaderAlt;

import React, { useRef } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="main-container">
      <div className="nav-container">
        <nav>
          <ul ref={navRef}>
            {/* Ajouter les Link pour faire des liens */}
            <li>Accueil</li>
            <li>Compétences</li>
            <li>Projets</li>
            <li>Expérience</li>
            <button className="nav-btn nav-close-btn" onClick={showNav}>
              <FaTimes />
            </button>
          </ul>
          <button className="nav-btn" onClick={showNav} id="openBtn">
            <FaBars />
          </button>
        </nav>

        <a href="/#">
          Get in touch <FaArrowRight style={{ transform: "translateY(14%)" }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

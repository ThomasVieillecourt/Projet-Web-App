import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [navColor, setNavColor] = useState("transparent");
  const [isNavExtended, setIsNavExtended] = useState(false);

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setNavColor("rgba(18,18,18, 0.9)")
      : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className="nav-container" style={{ backgroundColor: navColor }}>
      <nav>
        <ul ref={navRef}>
          <li>
            <Link href="/" onClick={isNavExtended ? showNav : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="#competences"
              scroll={false}
              onClick={isNavExtended ? showNav : ""}
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              href="#projets"
              scroll={false}
              onClick={isNavExtended ? showNav : ""}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              scroll={false}
              onClick={isNavExtended ? showNav : ""}
            >
              Expérience
            </Link>
          </li>
          <button
            className="nav-btn nav-close-btn"
            onClick={() => {
              setIsNavExtended(false), showNav();
            }}
          >
            <FaTimes />
          </button>
        </ul>
        <button
          className="nav-btn"
          onClick={() => {
            showNav(), setIsNavExtended(true);
          }}
          id="openBtn"
        >
          <FaBars />
        </button>
      </nav>

      <Link href="/#contact" scroll={false}>
        Me contacter <FaArrowRight style={{ transform: "translateY(14%)" }} />
      </Link>
    </div>
  );
};

export default Navbar;

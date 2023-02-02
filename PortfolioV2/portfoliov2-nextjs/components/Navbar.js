import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [navColor, setNavColor] = useState("transparent");

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
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="#competences" scroll={false}>
              Compétences
            </Link>
          </li>
          <li>
            <Link href="#projets" scroll={false}>
              Projets
            </Link>
          </li>
          <li>
            <Link href="#experience" scroll={false}>
              Expérience
            </Link>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </ul>
        <button className="nav-btn" onClick={showNav} id="openBtn">
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

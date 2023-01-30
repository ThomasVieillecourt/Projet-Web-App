import Link from "next/link";
import React from "react";
import { FaGithub, FaCopy, FaClipboardCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="./img/Achernar.png" alt="blur_backgroound" id="archenar" />
      <div className="banner-container__content">
        <div className="banner-container__text">
          <h1>Thomas Vieillecourt</h1>
          <p id="job">Développeur front-end</p>
          <p id="description">
            Autodidacte de 24 ans, je suis passionné par le développement web,
            le design graphique et l'expérience utilisateur.
          </p>
        </div>
        <div className="banner-container__btn-container">
          <Link href="https://github.com/ThomasVieillecourt" target="_blank">
            <button className="btn-banner" id="contact-btn">
              Me contacter
            </button>
          </Link>
          <Link href="https://github.com/ThomasVieillecourt" target="_blank">
            <button className="btn-banner" id="github">
              <FaGithub style={{ transform: "translateY(2px)" }} /> Github
            </button>
          </Link>
        </div>
      </div>
      <div className="banner-container__sphere">
        <img src="./img/sphere.png" alt="sphere" />
      </div>
    </div>
  );
};

export default Banner;

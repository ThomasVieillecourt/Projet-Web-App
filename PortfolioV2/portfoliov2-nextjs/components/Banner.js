import React from "react";
import { FaGithub } from "react-icons/fa";

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
            l'UI/UX et l'accessibilité depuis 4 ans.
          </p>
        </div>
        <div className="banner-container__btn-container">
          <button className="btn-banner" id="contact-btn">
            Me contacter
          </button>
          <button className="btn-banner" id="github">
            <FaGithub style={{ transform: "translateY(2px)" }} /> Github
          </button>
        </div>
      </div>
      <div className="banner-container__sphere">
        <img src="./img/sphere.png" alt="sphere" />
      </div>
    </div>
  );
};

export default Banner;

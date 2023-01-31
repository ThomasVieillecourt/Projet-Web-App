import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { path } from "@/config";

const Banner = () => {
  return (
    <div className="banner-container">
      <Image
        src={path + "/img/Achernar.png"}
        alt="blur_backgroound"
        className="archenar"
        width={450}
        height={450}
      />
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
        <Image
          src={path + "/img/sphere.png"}
          alt="sphere"
          width={480}
          height={480}
        />
      </div>
    </div>
  );
};

export default Banner;

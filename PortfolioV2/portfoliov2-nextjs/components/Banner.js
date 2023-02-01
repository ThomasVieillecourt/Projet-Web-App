import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { path } from "@/config";
import { motion } from "framer-motion";
import SplineAnim from "./SplineAnim";

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="banner-container__text"
        >
          <h1>Thomas Vieillecourt</h1>
          <p id="job">Développeur front-end</p>
          <p id="description">
            Autodidacte de 24 ans, je suis passionné par le développement web,
            le design graphique et l'expérience utilisateur.
          </p>
        </motion.div>
        <div className="banner-container__btn-container">
          <Link href="/#contact" scroll={false}>
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
        {/* <SplineComponent /> */}
        <SplineAnim />
      </div>
    </div>
  );
};

export default Banner;

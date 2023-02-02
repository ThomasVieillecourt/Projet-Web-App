import React from "react";
import { FaHashtag, FaLayerGroup, FaHandshake } from "react-icons/fa";
import { path } from "@/config";
import Image from "next/image";
import { motion } from "framer-motion";

const CardsBanner = () => {
  return (
    <div className="cardBanner-container">
      <Image
        src={path + "/img/Elnath.png"}
        alt="blur-gradient"
        className="elnath"
        width={800}
        height={800}
        priority
      />
      <div className="cards-container">
        <motion.div
          className="cards"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <FaHashtag className="cardBanner-icon" />
          <div>
            <h3>Développeur front-end</h3>
            <p>Développement de site web, application web ou mobile.</p>
          </div>
        </motion.div>
        <motion.div
          className="cards"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <FaLayerGroup className="cardBanner-icon" />
          <div>
            <h3>
              Expérience utilisateur <br />& Design
            </h3>
            <p>
              Le design et l{"'"}expérience des utilisateurs est au coeur de mes
              créations.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="cards"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <FaHandshake className="cardBanner-icon" />
          <div>
            <h3 id="competences">Accéssibilité</h3>
            <p>
              Développement de sites qui donne le droit à tout le monde d{"'"}
              explorer le web sur un même pied d{"'"}égalité.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsBanner;

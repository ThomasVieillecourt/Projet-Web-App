import React from "react";
import { FaHashtag, FaLayerGroup, FaHandshake } from "react-icons/fa";
import { path } from "@/config";
import Image from "next/image";

const CardsBanner = () => {
  return (
    <div className="cardBanner-container">
      <Image
        src={path + "/img/Elnath.png"}
        alt="blur-gradient"
        className="elnath"
        width={800}
        height={800}
      />
      <div className="cards-container">
        <div className="cards">
          <FaHashtag className="cardBanner-icon" />
          <div>
            <h3>Développeur front-end</h3>
            <p>Développement de site web, application web ou mobile.</p>
          </div>
        </div>
        <div className="cards">
          <FaLayerGroup className="cardBanner-icon" />
          <div>
            <h3>
              Expérience utilisateur <br />& Design
            </h3>
            <p>
              Le design et l'expérience des utilisateurs est au coeur de mes
              créations.
            </p>
          </div>
        </div>
        <div className="cards">
          <FaHandshake className="cardBanner-icon" />
          <div>
            <h3 id="competences">Accéssibilité</h3>
            <p>
              Développement de sites qui donne le droit à tout le monde
              d'explorer le web sur un pied d'égalité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsBanner;

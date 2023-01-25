import React from "react";
import { FaHashtag, FaLayerGroup, FaHandshake } from "react-icons/fa";

const CardsBanner = () => {
  return (
    <div className="cardBanner-container">
      <img src="../img/line.png" alt="background-line" id="line" />
      <img src="../img/Elnath.png" alt="blur-gradient" id="elnath" />
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

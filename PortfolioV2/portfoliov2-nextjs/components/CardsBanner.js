import React from "react";

const CardsBanner = () => {
  return (
    <div className="cardBanner-container">
      <img src="../img/line.png" alt="background-line" id="line" />
      <img src="../img/Elnath.png" alt="blur-gradient" id="elnath" />
      <div className="cards-container">
        <div className="cards">
          <img src="../img/31.svg" alt="development icon" />
          <div>
            <h3>Développeur front-end</h3>
            <p>Développement de site web, application web ou mobile.</p>
          </div>
        </div>
        <div className="cards">
          <img src="../img/01.svg" alt="design icon" />
          <div>
            <h3>Expérience utilisateur & Design</h3>
            <p>
              Le design et l'expérience des utilisateurs est au coeur de mes
              créations.
            </p>
          </div>
        </div>
        <div className="cards">
          <img src="../img/30.svg" alt="accessibility icon" />
          <div>
            <h3>Accéssibilité</h3>
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

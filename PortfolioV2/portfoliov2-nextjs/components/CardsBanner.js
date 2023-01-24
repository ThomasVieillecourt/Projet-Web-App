import React from "react";

const CardsBanner = () => {
  return (
    <div className="cardBanner-container">
      <img src="../img/line.png" alt="background-line" id="line" />
      <img src="../img/Elnath.png" alt="blur-gradient" id="elnath" />
      <div className="cards-container">
        <div className="cards">
          <img src="../img/31.svg" alt="development icon" />
          <h3>Développeur front-end</h3>
          <p>
            Autodidacte de 24 ans, je suis passionné par le développement web,
            l'UI/UX et l'accessibilité depuis 4 Autodidacte de 24 ans, je suis
            passionné par le développement web, l'UI/UX et l'accessibilité
            depuis 4 ans.ans.
          </p>
        </div>
        <div className="cards">
          <img src="../img/01.svg" alt="design icon" />
          <h3>Expérience utilisateur & Design</h3>
          <p>
            Autodidacte de 24 ans, je suis passionné par le développement web,
            l'UI/UX et l'accessibilité depuis 4 Autodidacte de 24 ans, je suis
            passionné par le développement web, l'UI/UX et l'accessibilité
            depuis 4 ans.ans.
          </p>
        </div>
        <div className="cards">
          <img src="../img/30.svg" alt="accessibility icon" />
          <h3>Accéssibilité</h3>
          <p>
            Autodidacte de 24 ans, je suis passionné par le développement web,
            l'UI/UX et l'accessibilité depuis 4 Autodidacte de 24 ans, je suis
            passionné par le développement web, l'UI/UX et l'accessibilité
            depuis 4 ans.ans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsBanner;

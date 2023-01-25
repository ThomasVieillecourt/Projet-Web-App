import React from "react";

const Devtools = () => {
  return (
    <div className="devtools-container">
      <div className="devtools__tech-container__each" id="competences">
        <h3>Mes compétences</h3>
        <div className="devtools__tech-container">
          <div>
            <img src="../img/javascript.png" alt="logo javascript" />
            <p>Javascript</p>
          </div>
          <div>
            <img src="../img/React.png" alt="logo javascript" />
            <p>React</p>
          </div>
          <div>
            <img src="../img/Shape.png" alt="logo javascript" />
            <p>Sass</p>
          </div>
          <div>
            <img src="../img/TypeScript.png" alt="logo javascript" />
            <p>Typescript</p>
          </div>
          <div>
            <img src="../img/Nodejs.png" alt="logo javascript" />
            <p>NodeJs</p>
          </div>
          <div>
            <img src="../img/Next.png" alt="logo javascript" />
            <p>NextJs</p>
          </div>
        </div>
      </div>
      <div className="devtools__tech-container__each">
        <h3 id="devtools-title-right">Mes outils</h3>
        <div className="devtools__tech-container">
          <div>
            <img src="../img/github.png" alt="logo github" />
            <p>GitHub</p>
          </div>
          <div>
            <img src="../img/git.png" alt="logo git" />
            <p>Git</p>
          </div>
          <div>
            <img src="../img/vscode.png" alt="logo visual studio code" />
            <p>Vs Code</p>
          </div>
        </div>
      </div>
      <div className="devtools__tech-container__each">
        <h3>J'ai déjà travaillé avec ..</h3>
        <div className="devtools__tech-container">
          <div>
            <img src="../img/wordpress.png" alt="logo javascript" />
            <p>Wordpress</p>
          </div>
          <div>
            <img src="../img/Mongo.png" alt="logo javascript" />
            <p>MongoDB</p>
          </div>
          <div>
            <img src="../img/postman.png" alt="logo javascript" />
            <p>Postman</p>
          </div>
        </div>
      </div>
      <div className="devtools__tech-container__each">
        <h3>Mes outils graphiques</h3>
        <div className="devtools__tech-container">
          <div>
            <img src="../img/figma.png" alt="logo javascript" />
            <p>Figma</p>
          </div>
          <div>
            <img src="../img/Illustrator.png" alt="logo javascript" />
            <p>Illustrator</p>
          </div>
          <div>
            <img src="../img/Photoshop.png" alt="logo javascript" />
            <p>Photoshop</p>
          </div>

          <div>
            <img src="../img/inDesign.png" alt="logo javascript" />
            <p>InDesign</p>
          </div>
        </div>
      </div>
      <img src="../img/spica.png" alt="gradient blur background" id="spica" />
    </div>
  );
};

export default Devtools;

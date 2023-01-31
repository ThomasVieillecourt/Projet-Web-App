import React from "react";
import Image from "next/image";
import { path } from "@/config";

const Devtools = () => {
  return (
    <div className="devtools-container">
      <div className="devtools__tech-container__each" id="competences">
        <h3>Mes compétences</h3>
        <div className="devtools__tech-container">
          <div>
            <Image
              src={path + "/img/javascript.png"}
              alt="logo javascript"
              width={60}
              height={60}
            />
            <p>Javascript</p>
          </div>
          <div>
            <Image
              src={path + "/img/React.png"}
              alt="logo react"
              width={60}
              height={60}
            />
            <p>React</p>
          </div>
          <div>
            <Image
              src={path + "/img/Shape.png"}
              alt="logo sass"
              width={60}
              height={60}
            />
            <p>Sass</p>
          </div>
          <div>
            <Image
              src={path + "/img/TypeScript.png"}
              alt="logo typescript"
              width={60}
              height={60}
            />
            <p>Typescript</p>
          </div>
          <div>
            <Image
              src={path + "/img/Nodejs.png"}
              alt="logo Nodejs"
              width={60}
              height={60}
            />
            <p>NodeJs</p>
          </div>
          <div>
            <Image
              src={path + "/img/Next.png"}
              alt="logo nexImage"
              width={60}
              height={60}
            />
            <p>NextJs</p>
          </div>
        </div>
      </div>
      <div className="devtools__tech-container__each">
        <h3 id="devtools-title-right">Mes outils</h3>
        <div className="devtools__tech-container">
          <div>
            <Image
              src={path + "/img/github.png"}
              alt="logo github"
              width={60}
              height={60}
            />
            <p>GitHub</p>
          </div>
          <div>
            <Image
              src={path + "/img/git.png"}
              alt="logo git"
              width={60}
              height={60}
            />
            <p>Git</p>
          </div>
          <div>
            <Image
              src={path + "/img/vscode.png"}
              alt="logo visual studio code"
              width={60}
              height={60}
            />
            <p>Vs Code</p>
          </div>
        </div>
      </div>
      <div className="devtools__tech-container__each">
        <h3>J'ai déjà travaillé avec ..</h3>
        <div className="devtools__tech-container">
          <div>
            <Image
              src={path + "/img/wordpress.png"}
              alt="logo wordpress"
              width={60}
              height={60}
            />
            <p>Wordpress</p>
          </div>
          <div>
            <Image
              src={path + "/img/Mongo.png"}
              alt="logo mangoDb"
              width={60}
              height={60}
            />
            <p>MongoDB</p>
          </div>
          <div>
            <Image
              src={path + "/img/postman.png"}
              alt="logo postman"
              width={60}
              height={60}
            />
            <p>Postman</p>
          </div>
        </div>
      </div>
      <div className="devtools__tech-container__each">
        <h3>Mes outils graphiques</h3>
        <div className="devtools__tech-container">
          <div>
            <Image
              src={path + "/img/figma.png"}
              alt="logo figma"
              width={60}
              height={60}
            />
            <p>Figma</p>
          </div>
          <div>
            <Image
              src={path + "/img/Illustrator.png"}
              alt="logo illustrator"
              width={60}
              height={60}
            />
            <p>Illustrator</p>
          </div>
          <div>
            <Image
              src={path + "/img/Photoshop.png"}
              alt="logo photoshop"
              width={60}
              height={60}
            />
            <p>Photoshop</p>
          </div>

          <div>
            <Image
              src={path + "/img/inDesign.png"}
              alt="logo inDesign"
              width={60}
              height={60}
            />
            <p>InDesign</p>
          </div>
        </div>
      </div>
      <Image
        src={path + "/img/spica.png"}
        alt="gradient blur background"
        className="spica"
        width={60}
        height={60}
      />
    </div>
  );
};

export default Devtools;

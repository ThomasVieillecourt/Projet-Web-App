import { project } from "@/projectDB";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Projets = () => {
  return (
    <div className="project-container" id="projets">
      <h2>Projets</h2>
      <ul>
        {project.map((projet) => (
          <li key={projet.id}>
            <Link href="projet/[id]" as={"projet/" + projet.id}>
              <div className="project-solo__container">
                <img src={projet.image} alt="background project" id="imgBg" />
                <div className="project-solo__container-text">
                  <h3>{projet.name}</h3>
                  <span id="plusBtn">
                    En savoir plus{" "}
                    <FaArrowRight style={{ transform: "translateY(3px)" }} />
                  </span>
                </div>
                <div className="project-solo__logo-container">
                  <img src={projet.logo1} alt="" />
                  <img src={projet.logo2} alt="" />
                  {projet.logo3 && <img src={projet.logo3} alt="" />}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="project-container__btn-container">
        <Link href="https://github.com/ThomasVieillecourt" target="_blank">
          <button className="btn-container-btn" id="githubProjet">
            Github
          </button>
        </Link>
        <Link href="https://www.behance.net/thomasvieillecourt" target="_blank">
          <button className="btn-container-btn" id="behanceProjet">
            Behance
          </button>
        </Link>
      </div>
      <img src="../img/procyon.png" alt="gradient background" id="procyon" />
    </div>
  );
};

export default Projets;

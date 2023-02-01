import { project } from "@/projectDB";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { path } from "@/config";
import Image from "next/image";
import { motion } from "framer-motion";

const Projets = () => {
  return (
    <div className="project-container" id="projets">
      <h2>Projets</h2>
      <ul>
        {project.map((projet) => (
          <motion.li
            key={projet.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Link href="projet/[id]" as={"projet/" + projet.id}>
              <div className="project-solo__container">
                <Image
                  src={projet.image}
                  alt="background project"
                  className="imgBg"
                  width={1280}
                  height={540}
                />
                <div className="project-solo__container-text">
                  <h3>{projet.name}</h3>
                  <span id="plusBtn">
                    En savoir plus{" "}
                    <FaArrowRight style={{ transform: "translateY(3px)" }} />
                  </span>
                </div>
                <div className="project-solo__logo-container">
                  <Image
                    src={projet.logo1}
                    alt={projet.name}
                    width={32}
                    height={32}
                  />
                  <Image
                    src={projet.logo2}
                    alt={projet.name}
                    width={32}
                    height={32}
                  />
                  {projet.logo3 && (
                    <Image
                      src={projet.logo3}
                      alt={projet.name}
                      width={32}
                      height={32}
                    />
                  )}
                </div>
              </div>
            </Link>
          </motion.li>
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
      <Image
        src={path + "/img/procyon.png"}
        alt="gradient background"
        className="procyon"
        width={32}
        height={32}
      />
    </div>
  );
};

export default Projets;

import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import { project } from "@/projectDB";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { path } from "@/config";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projet = ({ projet }) => {
  const [navColor, setNavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setNavColor("rgba(18,18,18, 0.98)")
      : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="main-container">
      <Meta title={projet.name} description={projet.fonction} />
      <div className="btn-container" style={{ backgroundColor: navColor }}>
        <Link href={"/"} id="goBack-btn">
          <FaChevronLeft
            style={{ transform: "translateY(2px)" }}
            id="chevronLeft"
          />
          Revenir à l'accueil
        </Link>
      </div>
      <motion.div
        className="projet-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src={path + "/img/procyon.png"}
          alt="gradient background"
          className="procyon"
          width={500}
          height={500}
        />

        <h1>{projet.name}</h1>

        <h2>{projet.concept}</h2>

        <Image
          src={path + projet.image}
          alt={projet.name}
          width={1280}
          height={580}
          className="projet-container__miniature"
          priority
        />
        <div className="projet-container__tech-logo">
          <Image src={projet.logo1} alt={projet.name} width={36} height={36} />
          <Image src={projet.logo2} alt={projet.name} width={36} height={36} />
          {projet.logo3 && (
            <Image
              src={projet.logo3}
              alt={projet.name}
              width={36}
              height={36}
            />
          )}
        </div>
        <div className="projet-container__content">
          <h3>Fonctionnalités du projet</h3>
          <p>{projet.fonction}</p>
          <Image
            src={projet.gif_presentation}
            alt={projet.name}
            className="gifPresentation"
            width={1280}
            height={580}
            priority
          />

          <h3>Challenge du projet</h3>
          <p>{projet.tools}</p>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default projet;

export const getStaticProps = (context) => {
  const filtered = project.filter((projet) => projet.id == context.params.id);

  if (filtered.length > 0) {
    return {
      props: {
        projet: filtered[0],
      },
    };
  }
};

// On recupere les ids des projets avec la fonction getStaticPaths
export const getStaticPaths = () => {
  const ids = project.map((projet) => projet.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

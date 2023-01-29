import Footer from "@/components/Footer";
import { project } from "@/projectDB";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const projet = ({ projet }) => {
  return (
    <div className="main-container">
      <div className="btn-container">
        <Link href={"/"} id="goBack-btn">
          <FaChevronLeft
            style={{ transform: "translateY(2px)" }}
            id="chevronLeft"
          />
          Revenir à l'accueil
        </Link>
      </div>
      <div className="projet-container">
        <img src="../img/procyon.png" alt="gradient background" id="procyon" />

        <h1>{projet.name}</h1>

        <h3>{projet.concept}</h3>

        <img
          src={projet.image}
          alt={projet.name}
          id="projet-container__miniature"
        />
        <div className="projet-container__tech-logo">
          <img src={projet.logo1} alt="" />
          <img src={projet.logo2} alt="" />
          {projet.logo3 && <img src={projet.logo3} alt="" />}
        </div>
        <div className="projet-container__content">
          <h3>Fonctionnalités du projet</h3>
          <p>{projet.fonction}</p>
          <img
            src={projet.gif_presentation}
            alt={projet.name}
            id="gifPresentation"
          />

          <h3>Challenge du projet</h3>
          <p>{projet.tools}</p>
        </div>
      </div>
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

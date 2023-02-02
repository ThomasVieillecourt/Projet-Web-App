import { path } from "@/config";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExpPro = () => {
  return (
    <div className="exp-container" id="experience">
      <h2>Expérience</h2>
      <motion.div
        className="exp-container__content"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="content--para">
          <h3>Stage Designer graphique - B{"'"}Creativ</h3>
          <p className="para-date">2017</p>
          <p className="para-text">
            Stage en agence événementiel, j{"'"}ai travaillé sur la création
            graphique de visuels web ainsi que sur la confection graphique d
            {"'"}éléments print (flyers, carte de visite, panneau publicitaire).
          </p>
        </div>

        <div className="content--para">
          <h3>Stage Chef de projet digital - Solocal</h3>
          <p className="para-date">2018</p>
          <p className="para-text">
            En charge de l{"'"}organisation des événements en interne du groupe.
            Cela pouvait concerner les formations, la mise en place des biais de
            communication et la cohérence graphique de ces derniers.
          </p>
        </div>

        <div className="content--para">
          <h3>Chef de projet digital - Big Youth</h3>
          <p className="para-date">2019-2022</p>
          <p className="para-text">
            Chef de projet, responsable de l{"'"}organisation, la planification
            et la livraison des projets web. J{"'"}ai pu travailler avec une
            équipe d{"'"}UI, UX designers ainsi que des développeurs front et
            back.
          </p>
        </div>

        <div className="content--para">
          <h3>Autodidacte</h3>
          <p className="para-date">Actuellement</p>
          <p className="para-text">En apprentissage constant !</p>
        </div>
      </motion.div>
      <Image
        src={path + "/img/Gacrux.png"}
        alt="gradient background"
        className="gacrux"
        width={800}
        height={800}
        priority
      />
    </div>
  );
};

export default ExpPro;

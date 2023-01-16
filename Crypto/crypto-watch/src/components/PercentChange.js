// composant qui change la couleur si le chiffre est positif ou negatif

import React, { useEffect, useState } from "react";

// on appelle les couleurs du fichier Sass
import colors from "../styles/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]);

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;

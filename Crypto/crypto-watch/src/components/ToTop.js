import React from "react";

//permet de revenir au top du site

const ToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src="./assets/arrow-icon.svg" alt="arrow icon" />
    </div>
  );
};

export default ToTop;

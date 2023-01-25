import Banner from "@/components/Banner";
import CardsBanner from "@/components/CardsBanner";
import Devtools from "@/components/Devtools";
import Projets from "@/components/Projets";
import React from "react";

const index = () => {
  return (
    <div className="main-container">
      <Banner />
      <CardsBanner />
      <Devtools />
      <Projets />
    </div>
  );
};

export default index;

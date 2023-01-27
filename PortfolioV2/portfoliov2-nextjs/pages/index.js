import Banner from "@/components/Banner";
import CardsBanner from "@/components/CardsBanner";
import Devtools from "@/components/Devtools";
import Projets from "@/components/Projets";
import React from "react";
import Layout from "@/components/Layout";

const index = () => {
  return (
    <Layout>
      <div className="main-container">
        <Banner />
        <CardsBanner />
        <Devtools />
        <Projets />
      </div>
    </Layout>
  );
};

export default index;

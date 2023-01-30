import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Thomas Vieillecourt développeur web front-end Javascript et React",
  description:
    "Portfolio de Thomas Vieillecourt, développeur web front-end Javascript spécialisé en React. Autodidacte de 24 ans, je suis passionné par le développement web, le design graphique et l'expérience utilisateur. ",
};

export default Meta;

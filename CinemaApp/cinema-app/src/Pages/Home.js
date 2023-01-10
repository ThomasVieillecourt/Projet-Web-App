import React, { useState } from "react";
import Trending from "../Components/Trending";
import TopRated from "../Components/TopRated";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";

const Home = () => {
  const [idData, setIdData] = useState("trending/movie/week");

  return (
    <div className="container">
      <Navigation />
      <div id="separator-header"></div>
      <div className="content">
        <Header modifysetIdData={setIdData} />

        <Trending homeData={idData} />
        {/* On appelle ici le composant trending qui lui-même map des Cards */}
        <TopRated homeData={idData} />
      </div>
    </div>
  );
};

export default Home;

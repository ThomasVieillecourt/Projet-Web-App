import React from "react";
import Trending from "../Components/Trending";
import TopRated from "../Components/TopRated";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <div id="separator-header"></div>
      <div className="content">
        <Header />

        <Trending />
        {/* On appelle ici le composant trending qui lui-même map des Cards */}
        <TopRated />
      </div>
    </div>
  );
};

export default Home;

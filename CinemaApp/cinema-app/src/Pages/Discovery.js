import React from "react";
import HeaderAlt from "../Components/HeaderAlt";
import Navigation from "../Components/Navigation";
import SearchResult from "../Components/SearchResult";

const Discovery = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="content">
        <HeaderAlt />

        <SearchResult />
      </div>
    </div>
  );
};

export default Discovery;

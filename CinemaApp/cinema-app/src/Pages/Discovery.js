import React from "react";
import Navigation from "../Components/Navigation";
import SearchResult from "../Components/SearchResult";

const Discovery = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="content">
        <SearchResult />
      </div>
    </div>
  );
};

export default Discovery;

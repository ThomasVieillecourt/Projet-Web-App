import React, { useEffect } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";

const Home = () => {
  const getData = () => {
    const apiKey = "0fd1886a37cbb0e6634bebf211def7ec";

    axios
      .get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + apiKey)
      .then((res) => console.log(res.data.results));
  };
  useEffect(() => getData());

  return (
    <div className="container">
      <Navigation />
      <div>
        <h1>contenu</h1>
      </div>
    </div>
  );
};

export default Home;

import axios from "axios";
import React, { useEffect, useState } from "react";
import TopRatedCard from "./TopRatedCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Movies = ({ homeData }) => {
  const [data, setData] = useState([]);
  let trendingCardDisplay = 7;

  // const getScreenWidth = () => {
  //   if (window.innerWidth >= 1700) {
  //     trendingCardDisplay = 7;
  //   } else if (window.innerWidth == 1700) {
  //     trendingCardDisplay = 6;
  //   } else if (window.innerWidth == 1550) {
  //     trendingCardDisplay = 5;
  //   } else if (window.innerWidth == 1350) {
  //     trendingCardDisplay = 4;
  //     // } else if (window.innerWidth <= 1115) {
  //     //   trendingCardDisplay = 6;
  //   }
  // };

  const getData = () => {
    const apiKey = "0fd1886a37cbb0e6634bebf211def7ec";

    axios
      .get("https://api.themoviedb.org/3/" + homeData + "?api_key=" + apiKey)
      .then((res) => setData(res.data.results));
  };

  useEffect(() => getData());
  // getScreenWidth();

  return (
    <div className="content-trending">
      <div className="content-trending__text">
        <h2>Top rated</h2>
        <a href="#">
          See all{" "}
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "1rem" }} />
        </a>
      </div>
      <div className="content-topRated__cards">
        <ul>
          {data
            .sort((a, b) => b.vote_average - a.vote_average)
            .slice(0, trendingCardDisplay)
            .map((trend) => (
              <TopRatedCard key={trend.id} trend={trend} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;

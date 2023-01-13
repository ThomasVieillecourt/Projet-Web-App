import axios from "axios";
import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Focus from "./Focus";

const Trending = ({ homeData }) => {
  const [data, setData] = useState([]);
  const [focusData, setFocusData] = useState([]);
  let cardData = homeData;
  let cardDisplay = 0;

  const getScreenWidth = () => {
    if (window.innerWidth >= 1551) {
      cardDisplay = 3;
    } else if (window.innerWidth <= 1550) {
      cardDisplay = 2;
    } else if (window.innerWidth <= 1000) {
      cardDisplay = 1;
    }
  };

  const getDataFilms = () => {
    const apiKey = "0fd1886a37cbb0e6634bebf211def7ec";

    axios
      .get("https://api.themoviedb.org/3/" + homeData + "?api_key=" + apiKey)
      .then((res) => setData(res.data.results));
    // .get("https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey) SERIES
    // .then((res) => setData(res.data.results));
  };
  useEffect(() => {
    getDataFilms();
  }, [<Header />]);

  getScreenWidth();

  return (
    <div className="content-trending">
      <Focus focusDataCard={focusData} />
      <div className="content-trending__text">
        <h2>
          {" "}
          {cardData === "tv/popular" ? "Trending series" : "Trending movies"}
        </h2>
        <a href="#">
          See all{" "}
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "1rem" }} />
        </a>
      </div>

      <div className="content-trending__cards">
        <ul>
          {data
            .sort((a, b) => b.release_date - a.release_date)
            .slice(0, cardDisplay)
            .map((trend) => (
              <TrendingCard
                key={trend.id}
                trend={trend}
                cardData={cardData}
                focus={setFocusData}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Trending;

import axios from "axios";
import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {

  
  const typeContent = [
    {
      movie: "trending/movie/week",
      serie: "tv/popular",
    },
  ];
  const [data, setData] = useState([]);
  const getDataFilms = () => {
    const apiKey = "0fd1886a37cbb0e6634bebf211def7ec";

    axios
      .get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + apiKey)
      .then((res) => setData(res.data.results));

    // .get("https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey)
    // .then((res) => setData(res.data.results));
  };

  useEffect(() => getDataFilms());

  return (
    <div className="content-trending">
      <div className="content-trending__text">
        <h2>Trending movies</h2>
        <a href="#">
          See all{" "}
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "1rem" }} />
        </a>
      </div>

      <div className="content-trending__cards">
        <ul>
          {data
            .sort((a, b) => b.release_date - a.release_date)
            .slice(0, 3)
            .map((trend) => (
              <TrendingCard key={trend.id} trend={trend} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;

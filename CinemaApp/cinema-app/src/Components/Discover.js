import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import DiscoverCard from "./DiscoverCard";
import Header from "./Header";

const Discover = ({ homeData }) => {
  const [data, setData] = useState([]);

  let discoverData = "";

  const getDataFilms = () => {
    const apiKey = "0fd1886a37cbb0e6634bebf211def7ec";

    if (homeData === "tv/popular") {
      discoverData = "tv";
    } else {
      discoverData = "movie";
    }

    axios
      .get(
        "https://api.themoviedb.org/3/discover/" +
          discoverData +
          "?api_key=" +
          apiKey +
          "&language=en-US&sort_by=revenue.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
      )
      .then((res) => setData(res.data.results));
  };
  useEffect(() => {
    getDataFilms();
  }, [<Header />]);

  return (
    <div className="content-trending">
      <div className="content-trending__text">
        <h2>Discover</h2>
        <a href="#">
          See all{" "}
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "1rem" }} />
        </a>
      </div>

      <div className="content-discover__cards">
        <ul>
          {data.slice(0, 7).map((trend) => (
            <DiscoverCard key={trend.id} trend={trend} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Discover;

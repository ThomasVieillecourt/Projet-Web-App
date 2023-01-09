import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TrendingCard = ({ trend }) => {
  return (
    <li
      className="tr-card"
      style={{
        background:
          "url('https://image.tmdb.org/t/p/original/" +
          trend.poster_path +
          "') center/cover no-repeat",
      }}
    >
      <div className="card__content">
        <p id="tr_rate" className="tc-content">
          {trend.vote_average.toFixed(1) + " "}
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700	" }} />
        </p>
      </div>
    </li>
  );
};

export default TrendingCard;

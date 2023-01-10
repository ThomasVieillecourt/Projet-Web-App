import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TrendingCard = ({ trend, cardData }) => {
  const dateFormater = (release_date) => {
    let newDate = new Date(release_date).toLocaleDateString("fr-FR", {
      year: "numeric",
    });

    return newDate;
  };

  return (
    <li
      className="trending-card"
      style={{
        background:
          "url('https://image.tmdb.org/t/p/original/" +
          trend.backdrop_path +
          "') center/cover",
      }}
    >
      <div className="card__content">
        <p id="tc_title" className="tc-content">
          {cardData === "tv/popular" ? trend.name : trend.title}
        </p>

        {/* {
          (cardData = "tv/popular" && (
            <p id="tc_title" className="tc-content">
              {trend.name}
            </p>
          ))
        } */}

        <p id="tc_date" className="tc-content">
          {cardData === "tv/popular"
            ? dateFormater(trend.first_air_date)
            : dateFormater(trend.release_date)}
        </p>

        {/* {
          (cardData = "tv/popular" && (
            <p id="tc_date" className="tc-content">
              {dateFormater(trend.first_air_date)}
            </p>
          ))
        } */}

        <p id="tc_rate" className="tc-content">
          {trend.vote_average.toFixed(1) + " "}
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700	" }} />
        </p>
      </div>
    </li>
  );
};

export default TrendingCard;

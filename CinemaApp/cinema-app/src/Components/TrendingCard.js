import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const TrendingCard = ({ trend, cardData, focus }) => {
  const [bgCard, setBgCard] = useState(trend.poster_path);
  const [titleCard, setTitleCard] = useState(trend.title);
  const focusContainer = document.querySelector(".focus-container");

  const [isActive, setActive] = useState();

  const ToggleBtn = () => {
    setActive(!isActive);
  };

  const dateFormater = (release_date) => {
    let newDate = new Date(release_date).toLocaleDateString("fr-FR", {
      year: "numeric",
    });

    return newDate;
  };

  function getBookmarkData() {
    let dataDB = {
      titleDB: titleCard,
      backgroundDB: bgCard,
    };
    axios.post("http://localhost:3003/bookmarked", dataDB);
  }

  return (
    <li
      className="trending-card"
      onClick={() => {
        focus(trend);
        focusContainer.className = "active";
      }}
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
        <div className="card__content-bot">
          <div>
            <p id="tc_date" className="tc-content">
              {cardData === "tv/popular"
                ? dateFormater(trend.first_air_date)
                : dateFormater(trend.release_date)}
            </p>

            <p id="tc_rate" className="tc-content">
              {trend.vote_average.toFixed(1) + " "}
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700	" }} />
            </p>
          </div>
          <div>
            <button type="button" id="watchBtn">
              WATCH NOW
            </button>
            <button
              title="Add a bookmark"
              arrow
              type="button"
              onClick={() => {
                setTitleCard(trend.title);
                setBgCard(trend.poster_path);
                getBookmarkData();
                ToggleBtn();
              }}
              className={isActive ? "activeBtn" : "addBtn"}
            >
              {isActive ? (
                <FontAwesomeIcon icon={faCheck} style={{ color: "$white" }} />
              ) : (
                <FontAwesomeIcon icon={faPlus} style={{ color: "$white" }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TrendingCard;

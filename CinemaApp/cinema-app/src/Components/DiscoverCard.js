import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const DiscoverCard = ({ trend }) => {
  const [isActive, setActive] = useState();
  const [bgCard, setBgCard] = useState(trend.poster_path);
  const [titleCard, setTitleCard] = useState(trend.title);

  const ToggleBtn = () => {
    setActive(!isActive);
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
      className="tr-card"
      style={{
        background:
          "url('https://image.tmdb.org/t/p/original/" +
          trend.poster_path +
          "') center/cover no-repeat,url('https://via.placeholder.com/500') center/cover",
      }}
    >
      <div className="card__content">
        <div className="tr-card-btn_container">
          <button type="button" id="watchBtn">
            WATCH NOW
          </button>
          <button
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
    </li>
  );
};

export default DiscoverCard;

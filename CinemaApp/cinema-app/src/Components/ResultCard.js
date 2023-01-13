import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const ResultCard = ({ result }) => {
  const [isActive, setActive] = useState();

  const [bgCard, setBgCard] = useState(result.poster_path);
  const [titleCard, setTitleCard] = useState(result.title);

  function getBookmarkData() {
    let dataDB = {
      titleDB: titleCard,
      backgroundDB: bgCard,
    };
    axios.post("http://localhost:3003/bookmarked", dataDB);
  }

  const ToggleBtn = () => {
    setActive(!isActive);
  };

  return (
    <li
      className="searchCard"
      style={{
        background:
          "url('https://image.tmdb.org/t/p/original/" +
          result.poster_path +
          "') center/cover no-repeat,url('https://image.tmdb.org/t/p/original/" +
          result.profile_path +
          "') center/cover no-repeat , url('https://via.placeholder.com/500') center/cover",
      }}
    >
      <button
        type="button"
        onClick={() => {
          setTitleCard(result.title);
          setBgCard(result.poster_path);
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

      <h2>{result.title || result.original_name || result.name}</h2>
    </li>
  );
};

export default ResultCard;

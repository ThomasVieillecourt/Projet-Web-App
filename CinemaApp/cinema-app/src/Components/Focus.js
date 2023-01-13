import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Focus = ({ focusDataCard }) => {
  // console.log(focusDataCard);
  return (
    <div className="content-trending">
      <div className="focus-container">
        <div className="focus-container__content">
          <h2>{focusDataCard.title || focusDataCard.name}</h2>
          <p>{focusDataCard.overview}</p>
          <p>
            <strong>{focusDataCard.vote_average}</strong>{" "}
            <FontAwesomeIcon
              icon={faStar}
              style={{ fontSize: "1rem", transform: "translateY(-2px)" }}
            />{" "}
            | {focusDataCard.popularity} votes -{" "}
            {focusDataCard.release_date || focusDataCard.first_air_date}
          </p>
        </div>
        <div
          className="focus-container__background"
          style={{
            background:
              "url('https://image.tmdb.org/t/p/original/" +
              focusDataCard.backdrop_path +
              "') center/cover",
          }}
        >
          ok
        </div>
      </div>
    </div>
  );
};

export default Focus;

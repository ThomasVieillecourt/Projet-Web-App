import React from "react";

const DiscoverCard = ({ trend }) => {
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
      <div className="card__content"></div>
    </li>
  );
};

export default DiscoverCard;

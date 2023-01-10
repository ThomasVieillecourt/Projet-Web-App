import React from "react";

const ResultCard = ({ result }) => {
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
      <h2>{result.title || result.original_name || result.name}</h2>
    </li>
  );
};

export default ResultCard;

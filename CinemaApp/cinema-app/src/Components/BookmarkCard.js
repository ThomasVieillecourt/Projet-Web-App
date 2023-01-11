import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const BookmarkCard = ({ mark }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:3003/bookmarked/" + mark.id);
    window.location.reload();
  };

  return (
    <li
      className="bookmarkCard"
      style={{
        background:
          "url('https://image.tmdb.org/t/p/original/" +
          mark.backgroundDB +
          "') center/cover no-repeat",
      }}
    >
      <button className="deleteBtn" onClick={() => handleDelete()}>
        <FontAwesomeIcon icon={faXmark} style={{ color: "$white" }} />
      </button>
    </li>
  );
};

export default BookmarkCard;

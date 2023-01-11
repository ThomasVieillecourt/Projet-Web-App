import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import axios from "axios";
import BookmarkCard from "../Components/BookmarkCard";
import HeaderAlt from "../Components/HeaderAlt";

const Like = () => {
  const [bookmarkeData, setBookmarkData] = useState([]);

  const getDataDB = () => {
    axios
      .get("http://localhost:3003/bookmarked")
      .then((res) => setBookmarkData(res.data));
  };

  useEffect(() => {
    getDataDB();
  }, []);

  return (
    <div className="container">
      <Navigation />
      <div className="content">
        <div className="content-bookmark">
          <HeaderAlt />
          <h2>Bookmarked movies</h2>
          <ul className="bookMark-container">
            {bookmarkeData.map((mark) => (
              <BookmarkCard key={mark.id} mark={mark} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Like;

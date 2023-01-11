import React, { useEffect, useState } from "react";
import axios from "axios";
import BookmarkCard from "./BookmarkCard";

const Bookmarked = () => {
  const [bookmarkeData, setBookmarkData] = useState([]);

  const getDataDB = () => {
    axios
      .get("http://localhost:3003/bookmarked")
      .then((res) => setBookmarkData(res.data));
  };

  useEffect(() => {
    getDataDB();
  }, []);

  console.log(bookmarkeData);

  return (
    <div>
      <ul>
        {bookmarkeData.map((mark) => (
          <BookmarkCard mark={mark} />
        ))}
      </ul>
    </div>
  );
};

export default Bookmarked;

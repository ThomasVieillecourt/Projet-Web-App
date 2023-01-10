import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

const SearchResult = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const [query, setQuery] = useState("p");

  const getDataSearch = () => {
    const apiKey = "api_key=0fd1886a37cbb0e6634bebf211def7ec";

    axios
      .get(
        "https://api.themoviedb.org/3/search/multi?" +
          apiKey +
          "&language=en-US&page=1&include_adult=false&query=" +
          query
      )
      .then((res) => setDataSearch(res.data.results));
  };
  useEffect(() => getDataSearch());

  return (
    <div className="content-search">
      <div className="content-search__input-container">
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          //   defaultValue=""
          placeholder="Search Movies, Series, TV shows"
          style={{ fontFamily: "$font1" }}
        />
      </div>
      <div>
        <ul className="searchCard-container">
          {dataSearch
            .filter((result) => result !== (result.media_type = "person"))
            .map((result) => (
              <ResultCard key={result.id} result={result} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;

import React from "react";
import "./SearchBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input type={"search"} className="input" placeholder="Search" />
    </div>
  );
};

export default SearchBar;

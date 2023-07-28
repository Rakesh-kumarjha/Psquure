import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Nav.css";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    onSearch(searchQuery);
  };

  return (
    <div className="search-modal__overlay">
      <div className="search-modal">
      <h2>Search</h2>
      <input type="text" onChange={handleSearch} />
        <button className="search-modal__closeButton">
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

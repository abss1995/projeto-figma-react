import React from "react";
import "./searchbar.css";

const SearchBar = ({ keyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem"
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Pesquise"}
    />
  );
};

export default SearchBar;

import React from "react";

const SearchBar = ({ text, onChange }) => {
  return (
    <input
      type="text"
      value={text}
      placeholder="Enter search text"
      onChange={onChange}
    />
  );
};

export default SearchBar;

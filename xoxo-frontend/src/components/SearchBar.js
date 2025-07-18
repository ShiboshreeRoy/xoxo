import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      className="form-control mb-4"
      type="text"
      placeholder="Search videos..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;

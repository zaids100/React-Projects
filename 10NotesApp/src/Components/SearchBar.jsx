import React from 'react';

function SearchBar({ handleSearchText }) {
  return (
    <div className="search">
      <img src="/public/search-interface-symbol.png" alt="" style={{ width: '20px' }} />
      <input
        onChange={(e) => handleSearchText(e.target.value)}
        type="text"
        placeholder="type to search....."
      />
    </div>
  );
}

export default SearchBar;

import React, { useState } from "react";
import "../Styles/App.css"; // Import your CSS file

const SearchBar = ({ onSearch, suggestions }) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 0);
    onSearch(value);
  };

  const handleSuggestionClick = (name) => {
    setQuery(name);
    setShowSuggestions(false);
    onSearch(name);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="search-bar">
      {/* Search Icon */}
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="#3498db"
      >
        <path d="M23.49 21.47l-5.29-5.29c1.23-1.87 1.99-4.22 1.99-6.71 0-5.52-4.48-10-10-10S0 7.48 0 13s4.48 10 10 10c2.28 0 4.36-.75 6.06-2.02l5.34 5.34 1.42-1.42zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
      </svg>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search doctor by name"
        value={query}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.slice(0, 3).map((doc) => (
            <li key={doc.id} onClick={() => handleSuggestionClick(doc.name)}>
              {doc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

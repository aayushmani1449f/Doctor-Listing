// ClearFilter.jsx
import React from "react";

const ClearFilter = ({ onClearFilters }) => {
  return (
    <button className="clear-filters" onClick={onClearFilters}>
      Clear Filters
    </button>
  );
};

export default ClearFilter;

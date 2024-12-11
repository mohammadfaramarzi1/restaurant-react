import React, { useState } from "react";

const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      <button
        type="button"
        // highlight class  for highlight main category
        className="filter-btn"
      >
        All
      </button>
      {categories.forEach(
        (category) => (
          <button type="button" className="filter-btn">
            {category}
          </button>
        )
      )}
    </div>
  );
};

export default Categories;

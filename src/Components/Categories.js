import React, { useState } from "react";

const Categories = ({ categories, mainCategory, setMainCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className={`${
            mainCategory === category ? "highlight filter-btn" : "filter-btn"
          } `}
          key={index}
          onClick={() => setMainCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;

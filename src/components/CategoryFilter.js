import React, {useState} from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({categories, onSelectCategory}) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleClick(e) {
    const category = e.target.value
    setSelectedCategory(category)
    onSelectCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {CATEGORIES.map(category => (
        <button
          key={category}
          data-category={category}
          onClick={handleClick}
          className={selectedCategory === category ? "selected" : ""}
          > 
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

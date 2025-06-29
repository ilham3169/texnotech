import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://back-texnotech.onrender.com/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const reversedCategories = [...categories].reverse();

  return (
    <div className="category">
      {reversedCategories
        .filter((category) => category.parent_category_id == null)
        .map((category, index) => (
          <Link to={`/category-results/${category.id}`} key={index}>
            <div className="box-category box f_flex">
              <img src={category.icon_image_link} alt="Category" />
              <span>{category.name}</span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Categories;

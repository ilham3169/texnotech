import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://back-texnotech.onrender.com/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const reversedCategories = [...categories].reverse();

  const handleCategoryClick = () => {
    navigate("/all-products");
  };


  return (
    <div className="category">
      {reversedCategories.filter((category) => category.parent_category_id == null).map((category, index) => {
        return (
          <div
            className="box-category box f_flex"
            key={index}
            onClick={handleCategoryClick} 
          >
            <img src={category.icon_image_link} alt="Category" />
            <span>{category.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

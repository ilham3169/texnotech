import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // Fetch categories from API
    fetch("http://127.0.0.1:8000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Reverse the categories array
  const reversedCategories = [...categories].reverse();

  // Handle category click
  const handleCategoryClick = () => {
    navigate("/all-products"); // Redirect to the /allproducts page
  };

  return (
    <div className="category">
      {reversedCategories.map((category, index) => {
        return (
          <div
            className="box-category box f_flex"
            key={index}
            onClick={handleCategoryClick} // Trigger handleCategoryClick on click
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

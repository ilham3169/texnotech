import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://texnotech.store/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const reversedCategories = [...categories].reverse();


  return (
    <div className="category">
      {reversedCategories.filter((category) => category.parent_category_id == null).map((category, index) => {
        return (
          <Link
            to={{
              pathname: `/all-products/${category.id}`,
              state: { categoryId: category.id }, // Pass productId as state
            }}
            key={index}
          >
            <div
              className="box-category box f_flex"
            >
              <img src={category.icon_image_link} alt="Category" />
              <span>{category.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;

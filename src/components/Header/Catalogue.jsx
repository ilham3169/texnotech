import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import "./Catalogue.css"; // We'll define styles in a separate CSS file
import { Link } from "react-router-dom";

const Catalogue = ({ onClose }) => {
  // Sample categories based on the image
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(1);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
    fetch("https://back-texnotech.onrender.com/categories/parent")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching categories:", error));

    fetch(`https://back-texnotech.onrender.com/products?page=1&page_size=6&category_id=${categoryFilter}&available=true`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
      
  }, []);

  const [searches] = useState([
    "Redmi note 13",
    "iPhone 13",
    "iPhone 14",
    "iPhone 15",
  ])

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSearch, setSelectedSearch] = useState(null);

  return (
    <div className="catalogue-container">
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <ClipLoader color="#3498db" size={50} />
        </div>
      )}

      {!loading && (
        <div>
          <div className="catalogue-header" style={{justifyContent: "end"}}>
            <button className="close-button" onClick={onClose}>
              <b style={{color: "red"}}>X</b>
            </button>
          </div>
          <div className="catalogue-content">
            <div className="categories">
              <h3>Populyar kateqoriyalar</h3>
              <ul>
                {categories.slice(0,6).map((category, index) => (
                  <li
                    key={index}
                  >
                    <Link 
                      to={{
                        pathname: `/all-products/${category.id}`,
                        state: { categoryId: category.id }, // Pass productId as state
                      }}
                      key={index}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3>Populyar axtarışlar</h3>
              <ul>
                {searches.map((search, index) => (
                  <li
                    key={index}
                  >
                    {search}
                  </li>
                ))}
              </ul>

            </div>
            <div className="products">
              <h3>Məhsullar</h3>
              <div className="product-grid">
                {products.map((product, index) => (
                  <Link
                    to={{
                      pathname: `/products/${product.name
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^a-z0-9-]/g, "")}-${product.id}`,
                      
                      state: { productId: product.id },
                    }}
                    key={index}
                  >
                    <div key={product.id} className="product-card">
                      <img src={product.image_link} alt={product.name} />
                      <h4 style={{height: "40px"}}>{product.name}</h4>

                      <h4 style={{
                        fontSize: "16px",
                        margin: "0",
                        paddingLeft: "0px",
                        color: "red"
                      }}
                      >
                        {product.discount} AZN
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "grey",
                            fontWeight: "500",
                            fontSize: "18px",
                            marginLeft: "5px",
                          }}
                        >
                          {product.price} AZN
                        </span>
                      </h4>
                      {/* <p style={{fontSize: "17px", color: "red", fontWeight: "600"}}>{product.price} ₼</p> */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogue;
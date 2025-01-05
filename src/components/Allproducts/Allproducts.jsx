import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ allProductsData, addToCart }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Handler for when the price range slider changes
  const handlePriceRangeChange = (e) => {
    const newValue = e.target.value;
    setPriceRange({ ...priceRange, max: newValue });
  };

  return (
    <>
      <div className="filter-box">
        <select className="filter-select">
          <option value="popular">Brend Seçin</option>
          <option value="price-low">Samsung</option>
          <option value="price-high">Xiaomi</option>
        </select>

        <div className="price-range-container">
          <div className="price-range-label-container">
            <span className="price-range-label">Qiymət aralığı</span>
          </div>
          <input
            type="range"
            id="price-range"
            name="price-range"
            min="0"
            max="1000"
            step="10"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
            className="price-range-input"
          />
          <span className="price-range-value">₼ {priceRange.min} - ₼ {priceRange.max}</span>
          </div>

          <div className="available-container">
            <span className="available-text">Mövcuddur</span>
            <input
              className="available-checkbox"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>

          <div className="available-container">
            <span className="available-text">Endirimli</span>
            <input
              className="available-checkbox"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          
        </div>
        

      <div className="categories-container">
        <button className="category-button">Mobil telefonlar və smartfonlar</button>
        <button className="category-button">Televizorlar</button>
        <button className="category-button">Paltaryuyan maşınlar</button>
        <button className="category-button">Soyuducular</button>
        <button className="category-button">Qabyuyan maşınlar</button>
        <button className="category-button">Adi tozsoranlar</button>
        <button className="category-button">Elektrik çaydanlar və termopotlar</button>
        <button className="category-button">Blenderlər</button>
        <button className="category-button">Ətçəkən maşınlar</button>
      </div>

      <h1 className="page-header">All Products</h1>
      <div className="custom-grid">
        {allProductsData
          .filter((product) => product.price <= priceRange.max) // Filter products based on price range
          .map((product, index) => {
            return (
              <div className="custom-box" key={index}>
                <div className="product mtop" style={{ width: '250px' }}>
                  <div className="img">
                    <span className="discount">{product.discount}% Off</span>
                    <img src={product.img} alt="product-image" />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <Link to={`/all-products/${product.id}`}>
                      <h5>Click here for more Info</h5>
                    </Link>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h4>{product.price}.00</h4>
                      <button
                        aria-label="Add to cart"
                        onClick={() => addToCart(product)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Allproducts;

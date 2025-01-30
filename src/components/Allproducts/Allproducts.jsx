import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ addToCart }) => {

  // API domain
  const domain = "https://back-texnotech.onrender.com/";

  // Data fetched from API
  const [allProducts, setAllProducts] = useState([]);
  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  // Filter input fields
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000});
  const [availabilityFilter, setAvailabilityFilter] = useState(null);
  const [discountFilter, setDiscountFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  // Check first time page loading
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Category button selected
  const [selectedCategory, setSelectedCategory] = useState(-1);
  
  // Handle filter fields' values
  const handleAvailabilityFilterChange = (e) => {
    setAvailabilityFilter(e.target.checked);
  };

  const handleDiscountFilterChange = (e) => {
    setDiscountFilter(e.target.checked);
  };

  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    if (e === categoryFilter) {
      setCategoryFilter(null);
      setSelectedCategory(null);
    }
    else{
      setCategoryFilter(e);
      setSelectedCategory(e);
    }
    
  };

  const handlePriceRangeChange = (e) => {
    const newValue = e.target.value;
    setPriceFilter(newValue);
    setPriceRange({ ...priceRange, max: newValue });
  };

  // Send API request when filter is applied
  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      fetchProducts(); 
    } else {
      const timeoutId = setTimeout(() => {
        fetchProducts();
      }, 100);
  
      return () => clearTimeout(timeoutId);
    }
  }, [categoryFilter, brandFilter, priceFilter, availabilityFilter, discountFilter]);

  // Get products API call
  const fetchProducts = () => {
    let link = domain + "products" + "?";
    
    if (categoryFilter) {
      link += "&category_id=" + categoryFilter;
    }
    if (brandFilter && brandFilter !== "popular") {
      link += "&brand_id=" + brandFilter;
    }
    if (availabilityFilter) {
      link += "&available=" + availabilityFilter;
    }
    if (discountFilter) {
      link += "&discount=" + discountFilter;
    }
    if (priceFilter) {
      link += "&max_price=" + priceFilter;
    }
  
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        const products = data.map((product) => ({
          name: product.name,
          img: product.image_link,
          price: product.price,
          id: product.id,
        }));
        setAllProducts(products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  // Get Brands and Categories
  useEffect(() => {
    fetch("https://back-texnotech.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => {
        const brandNames = data.map((brand) => ({
          id: brand.id,
          name: brand.name,
        }));
        setBrandNames(brandNames);
      })
      .catch((error) => console.error("Error fetching brands:", error));
  
    fetch("https://back-texnotech.onrender.com/categories")
      .then((response) => response.json())
      .then((data) => {
        const categoryNames = data.map((category) => ({
          id: category.id,
          name: category.name,
        }));
        setCategoryNames(categoryNames);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <>
      <div className="filter-box">
        <select className="filter-select"
          onChange={handleBrandFilterChange}
        >
          <option value="popular">Brend Seçin</option>
          {brandNames.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
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
            max="100000"
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
            onChange={handleAvailabilityFilterChange}
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
            onChange={handleDiscountFilterChange}
          />
        </div>
      </div>

      <div className="categories-container">
        {categoryNames.map((category, index) => (
            <button className={`category-button ${selectedCategory === category.id ? "category-button-selected" : ""}`}
              key={index} value={category} 
              onClick={() => handleCategoryFilterChange(category.id)}
            >
              {category.name}
            </button>
          ))}
      </div>

      <h1 className="page-header">All Products</h1>
      <div className="custom-grid">
        {allProducts.map((product, index) => {
          const productUrl = `/products/${product.name
            .toLowerCase()
            .replace(/ /g, '-') 
            .replace(/[^a-z0-9-]/g, '')}-${product.id}`; 

          return (
            <Link
              to={{
                pathname: productUrl,
                state: { productId: product.id }, 
              }}
              key={index}
              className="custom-box"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="product mtop" style={{ width: '250px' }}>
                <div className="img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <h5>Click here for more Info</h5>
                </div>
                <div className="product-details" style={{color: "red", fontSize: "21px"}} >
                  <h4 style={{whiteSpace: "nowrap"}}>
                    {product.price}.00 ₼
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </>
  );
};

export default Allproducts;

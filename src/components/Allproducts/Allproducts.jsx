import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ addToCart }) => {
  const domain = "https://back-texnotech.onrender.com/products";

  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000});
  const [allProducts, setAllProducts] = useState([]); // For storing products
  const [brandNames, setBrandNames] = useState([]); // For storing brand names
  const [categoryNames, setCategoryNames] = useState([]); // For storing category names

  const [availabilityFilter, setAvailabilityFilter] = useState(null);
  const [discountFilter, setDiscountFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  

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
    setCategoryFilter(e)
  };

  const handlePriceRangeChange = (e) => {
    const newValue = e.target.value;
    setPriceFilter(newValue);
    setPriceRange({ ...priceRange, max: newValue });
  };

  useEffect(() => {
    let link = domain + "?"
    
    if (categoryFilter) {
      link = link + "&category_id=" + categoryFilter;
    }

    if (brandFilter && brandFilter != "popular") {
      link = link + "&brand_id=" + brandFilter;
    }

    if (availabilityFilter) {
      link = link + "&available=" + availabilityFilter;
    }

    if (discountFilter) {
      link = link + "&discount=" + discountFilter;
    }

    if (priceFilter) {
      link = link + "&max_price=" + priceFilter;
    }

    // Fetch products
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

    // Fetch brand names
    fetch("https://back-texnotech.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => {
        const brandNames = data.map((brand) => ({
          id: brand.id,
          name: brand.name
        }));
        setBrandNames(brandNames);
      })
      .catch((error) => console.error("Error fetching brands:", error));

    // Fetch categories
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

    }, [categoryFilter, brandFilter, priceFilter, availabilityFilter, discountFilter]);

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
            <button className="category-button" key={index} value={category} 
            onClick={() => handleCategoryFilterChange(category.id)}
            >
              {category.name}
            </button>
          ))}
          <button className="category-button" 
            onClick={() => handleCategoryFilterChange(null)}
            >
              Hamisi
            </button>
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

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ addToCart }) => {
  const { categoryId } = useParams();

  // API domain
  const domain = "https://texnotech.store/";

  // Data fetched from API
  const [allProducts, setAllProducts] = useState([]);
  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  // Filter input fields
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000});
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
          discount: product.discount
        }));
        setAllProducts(products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  // Get Brands and Categories
  useEffect(() => {

    if (categoryId && categoryId >= 0) {
      handleCategoryFilterChange(categoryId)
    }

    fetch("https://texnotech.store/brands")
      .then((response) => response.json())
      .then((data) => {
        const brandNames = data.map((brand) => ({
          id: brand.id,
          name: brand.name,
        }));
        setBrandNames(brandNames);
      })
      .catch((error) => console.error("Error fetching brands:", error));
  
    fetch("https://texnotech.store/categories")
      .then((response) => response.json())
      .then((data) => {
        const categoryNames = data.map((category) => ({
          id: category.id,
          name: category.name,
          parent_category_id: category.parent_category_id
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
            max="20000"
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
        {categoryNames.filter((category) => category.parent_category_id == null).map((category, index) => (
            <button className={`category-button ${selectedCategory === category.id ? "category-button-selected" : ""}`}
              key={index} value={category} 
              onClick={() => handleCategoryFilterChange(category.id)}
            >
              {category.name}
            </button>
          ))}
      </div>

      <h1 className="page-header">Bütün Məhsullar</h1>
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
                  <img style={{height: "200px", width: "200px"}} src={product.img} alt={product.name} />
                </div>
                <div className="product-details" style={{height: "fit-content"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "center", background: "red", width: "fit-content", margin: "0 auto 0 auto", borderRadius: "10%"}}>
                    <span style={{fontWeight: "600", fontSize: "18px", color: "white", padding: "0 15%"}}>
                      -{Math.round(((product.price - product.discount)/product.price) * 100)} %
                    </span>
                  </div>
                  <h3 title={product.name} style={{fontSize: "17px"}}>
                    {product.name}
                  </h3>
                  <h5 style={{fontWeight: "500", fontSize: "14px"}}>Ətraflı Məlumat üçün klikləyin</h5>
                </div>
                <div className="product-details" style={{color: "red", fontSize: "21px"}} >
                  <h4 style={{whiteSpace: "nowrap", fontWeight: "600"}}>
                    {product.discount}.00 ₼ <span style={{textDecoration: "line-through", color: "grey"}}>{product.price} ₼</span>
                  </h4>
                </div>
                <div style={{background: "#fcee26", width: "fit-content", padding: "5% 10%", display: "flex", justifyContent: "center", margin: "0 auto", borderRadius: "5%"}}>
                  <span style={{color: "black", fontWeight: "500", fontSize: "17px"}}>
                    {(product.discount / 3).toFixed(2)} ₼ x 3 ay
                  </span>
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

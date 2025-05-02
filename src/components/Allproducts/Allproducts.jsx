import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ addToCart }) => {
  const { categoryId } = useParams();
  const domain = "https://back-texnotech.onrender.com/";

  const [allProducts, setAllProducts] = useState([]);
  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(5); // Load 5 products per page

  // Filter states (unchanged)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
  const [availabilityFilter, setAvailabilityFilter] = useState(null);
  const [discountFilter, setDiscountFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(-1);

  const observer = useRef();

  const fetchProducts = useCallback(
    async (page) => {
      if (!hasMore || loading) return;
      setLoading(true);
      let link = `${domain}products?page=${page}&page_size=${pageSize}`;
      if (categoryFilter) link += `&category_id=${categoryFilter}`;
      if (brandFilter && brandFilter !== "popular") link += `&brand_id=${brandFilter}`;
      if (availabilityFilter) link += `&available=${availabilityFilter}`;
      if (discountFilter) link += `&discount=${discountFilter}`;
      if (priceFilter) link += `&max_price=${priceFilter}`;

      try {
        const response = await fetch(link);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        const products = Array.isArray(data)
          ? data.map((product) => ({
              name: product.name,
              img: product.image_link,
              price: product.price,
              id: product.id,
              discount: product.discount,
              is_active: product.is_active,
            }))
          : [];

        setAllProducts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const newProducts = products.filter((p) => !existingIds.has(p.id));
          return [...prev, ...newProducts];
        });
        // Stop only if fewer than pageSize after page 1
        if (products.length < pageSize && page > 1) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [categoryFilter, brandFilter, priceFilter, availabilityFilter, discountFilter, hasMore, pageSize]
  );


  // Filter handlers (unchanged)
  const handleAvailabilityFilterChange = (e) => {
    setAvailabilityFilter(e.target.checked);
    setCurrentPage(1);
    setHasMore(true);
    setAllProducts([]);
  };

  const handleDiscountFilterChange = (e) => {
    setDiscountFilter(e.target.checked);
    setCurrentPage(1);
    setHasMore(true);
    setAllProducts([]);
  };

  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
    setCurrentPage(1);
    setHasMore(true);
    setAllProducts([]);
  };

  const handleCategoryFilterChange = (e) => {
    if (e === categoryFilter) {
      setCategoryFilter(null);
      setSelectedCategory(null);
    } else {
      setCategoryFilter(e);
      setSelectedCategory(e);
    }
    setCurrentPage(1);
    setHasMore(true);
    setAllProducts([]);
  };

  const handlePriceRangeChange = (e) => {
    const newValue = e.target.value;
    setPriceFilter(newValue);
    setPriceRange((prev) => ({ ...prev, max: newValue }));
    setCurrentPage(1);
    setHasMore(true);
    setAllProducts([]);
  };

  const lastProductRef = useCallback(
    (node) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCurrentPage((prev) => prev + 1);
          }
        },
        { threshold: 1.0 } // Fully in view
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, currentPage]
  );

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, fetchProducts]);

  useEffect(() => {
    fetch(`${domain}brands`)
      .then((response) => response.json())
      .then((data) => setBrandNames(data.map((brand) => ({ id: brand.id, name: brand.name }))))
      .catch((error) => console.error("Error fetching brands:", error));
    fetch(`${domain}categories`)
      .then((response) => response.json())
      .then((data) =>
        setCategoryNames(
          data.map((category) => ({
            id: category.id,
            name: category.name,
            parent_category_id: category.parent_category_id,
          }))
        )
      )
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const ProductItem = React.memo(
    React.forwardRef(({ product }, ref) => {
      const productUrl = `/products/${product.name
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "")}-${product.id}`;
      return (
        <Link
          to={{ pathname: productUrl, state: { productId: product.id } }}
          className="custom-box"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div ref={ref} className="product mtop">
            <div className="img">
              <img
                style={{ height: "200px", width: "200px" }}
                src={product.img}
                alt={product.name}
                loading="lazy"
              />
            </div>
            <div className="product-details">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "red",
                  width: "fit-content",
                  margin: "0 auto",
                  borderRadius: "10%",
                }}
              >
                <span
                  style={{ fontWeight: "600", fontSize: "18px", color: "white"}}
                >
                  -{Math.round(((product.price - product.discount) / product.price) * 100)} %
                </span>
              </div>
              {/* Updated product name to allow wrapping */}
              <h3 title={product.name}>
                {product.name}
              </h3>
              <h5 style={{ fontWeight: "500", fontSize: "14px" }}>Ətraflı Məlumat üçün klikləyin</h5>
            </div>
            <div className="product-details" style={{ color: "red", fontSize: "21px" }}>
              <h4>
                {product.discount} ₼{" "}
                <span style={{ textDecoration: "line-through", color: "grey" }}>
                  {product.price} ₼
                </span>
              </h4>
            </div>
            <div
              style={{
                background: "#fcee26",
                width: "fit-content",
                padding: "5% 10%",
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
                borderRadius: "5%",
              }}
            >
              <span style={{ color: "black", fontWeight: "500", fontSize: "17px" }}>
                {(product.discount / 3).toFixed(2)} ₼ x 3 ay
              </span>
            </div>

            <div>
              
            <button
              onClick={(e) => {
                e.preventDefault();    // Prevents default link behavior
                addToCart(product);   // Add the product to the cart
              }}
              style={{
                padding: "8px 12px",
                backgroundColor: "#5f4eff",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                alignItems: "center",
                gap: "8px",
                width: "250px",
                height: "43px",
                fontSize: 25,
                marginTop: "15px"
              }}
            >
              <i className="fa fa-cart-plus"></i>
              <i> Səbətə əlavə et</i>
            </button>
              
            </div>

          </div>
        </Link>
      );
    })
  );

  const activeProducts = allProducts.filter((product) => product.is_active === true);

  return (
    <>
      <div className="filter-box">
        <select className="filter-select" onChange={handleBrandFilterChange}>
          <option value="popular">Brend Seçin</option>
          {brandNames.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        {/* <div className="price-range-container">
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
        </div> */}
        <div className="available-container">
          <span className="available-text">Mövcuddur</span>
          <input
            className="available-checkbox"
            type="checkbox"
            id="checkboxNoLabel"
            onChange={handleAvailabilityFilterChange}
          />
        </div>
        <div className="available-container">
          <span className="available-text">Endirimli</span>
          <input
            className="available-checkbox"
            type="checkbox"
            id="checkboxNoLabel"
            onChange={handleDiscountFilterChange}
          />
        </div>
      </div>

      <div className="categories-container">
        {categoryNames
          .filter((category) => category.parent_category_id == null)
          .map((category) => (
            <button
              className={`category-button ${
                selectedCategory === category.id ? "category-button-selected" : ""
              }`}
              key={category.id}
              onClick={() => handleCategoryFilterChange(category.id)}
            >
              {category.name}
            </button>
          ))}
      </div>

      <h1 className="page-header">Bütün Məhsullar</h1>

      {loading && allProducts.length === 0 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>Yüklənir...</div>
      )}

      <div className="custom-grid">
        {activeProducts.map((product, index) => {
          if (index === activeProducts.length - 1) {
            return <ProductItem key={product.id} product={product} ref={lastProductRef} />;
          }
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>

      {loading && allProducts.length > 0 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>Digər məhsullar yüklənir...</div>
      )}

      {!hasMore && allProducts.length > 0 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>Bütün məhsullar yükləndi</div>
      )}
    </>
  );
};

export default Allproducts;
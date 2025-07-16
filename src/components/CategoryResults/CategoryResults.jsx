import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "./CategoryResults.css";


const CategoryResults = ({ addToCart }) => {
  
  const { categoryId } = useParams();
  const domain = "https://back-texnotech.onrender.com/";

  const [allProducts, setAllProducts] = useState([]);
  const [brandNames, setBrandNames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(10); // Load 10 products per page

  // Filter states
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
  const [availabilityFilter, setAvailabilityFilter] = useState(null);
  const [discountFilter, setDiscountFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  
  const fetchProducts = async (page) => {
    setLoading(true);
    let link = `${domain}products?page=${page}&page_size=${pageSize}&category_id=${categoryId}`;

    if (brandFilter && brandFilter !== "popular") link += `&brand_id=${brandFilter}`;
    if (availabilityFilter) link += `&available=${availabilityFilter}`;
    if (discountFilter) link += `&discount=${discountFilter}`;
    if (priceFilter) link += `&max_price=${priceFilter}`;

    try {
      console.log(`Trying to fetch for ${link}`);
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
      setAllProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  // Fetch total number of products for pagination
  const fetchTotalProducts = async () => {
    let countUrl = `${domain}products/num-products`;

    try {
      const response = await fetch(countUrl);
      if (!response.ok) throw new Error("Failed to fetch product count");
      const count = await response.json();
      setTotalProducts(Number(count));
    } catch (error) {
      console.error("Error fetching product count:", error);
    }
  };

  // Filter handlers
  const handleAvailabilityFilterChange = (e) => {
    setAvailabilityFilter(e.target.checked);
    setCurrentPage(1);
    setAllProducts([]);
  };

  const handleDiscountFilterChange = (e) => {
    setDiscountFilter(e.target.checked);
    setCurrentPage(1);
    setAllProducts([]);
  };

  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
    setCurrentPage(1);
    setAllProducts([]);
  };

  const handlePriceRangeChange = (e) => {
    const newValue = e.target.value;
    setPriceFilter(newValue);
    setPriceRange((prev) => ({ ...prev, max: newValue }));
    setCurrentPage(1);
    setAllProducts([]);
  };

  useEffect(() => {
    setAllProducts([]);
    setCurrentPage(1);
  }, [categoryId]);

  useEffect(() => {
    fetchProducts(currentPage);
    fetchTotalProducts()
  }, [
    currentPage,
    brandFilter,
    priceFilter,
    availabilityFilter,
    discountFilter
  ]);

  useEffect(() => {
    fetch(`${domain}brands`)
      .then((response) => response.json())
      .then((data) => setBrandNames(data.map((brand) => ({ id: brand.id, name: brand.name }))))
      .catch((error) => console.error("Error fetching brands:", error));
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
          <div ref={ref} className="product mtop" style={{ width: "250px" }}>
            <div className="img">
              <img
                style={{ height: "200px", width: "200px" }}
                src={product.img}
                alt={product.name}
                loading="lazy"
              />
            </div>
            <div className="product-details" style={{ height: "fit-content" }}>
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
                  style={{ fontWeight: "600", fontSize: "18px", color: "white", padding: "0 15%" }}
                >
                  -{Math.round(((product.price - product.discount) / product.price) * 100)} %
                </span>
              </div>
              <h3 title={product.name} style={{ fontSize: "17px" }}>
                {product.name}
              </h3>
              <h5 style={{ fontWeight: "500", fontSize: "14px" }}>Ətraflı Məlumat üçün klikləyin</h5>
            </div>
            <div className="product-details" style={{ color: "red", fontSize: "21px" }}>
              <h4 style={{ whiteSpace: "nowrap", fontWeight: "600" }}>
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
          </div>
        </Link>
      );
    })
  );

  const activeProducts = allProducts.filter((product) => product.is_active === true);

  const totalPages =
    totalProducts > 0 ? Math.ceil(totalProducts / pageSize) : 0;

  const windowSize = 5;
  const halfWindow = Math.floor(windowSize / 2);

  let startPage = Math.max(1, currentPage - halfWindow);
  let endPage = Math.min(totalPages, startPage + windowSize - 1);

  if (endPage - startPage < windowSize - 1) {
    startPage = Math.max(1, endPage - windowSize + 1);
  }
  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

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

      <h1 className="page-header">Kateqoriya üzrə məhsullar</h1>

      {loading && allProducts.length === 0 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>Yüklənir...</div>
      )}

      {!loading && activeProducts.length === 0 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>Heç bir məhsul tapılmadı</div>
      )}

      <div className="custom-grid">
        {activeProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div
          className="pagination-controls"
          style={{ textAlign: "center", margin: "30px 0" }}
        >
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "active-page-btn" : "page-btn"}
              style={{
                margin: "0 5px",
                padding: "8px 16px",
                borderRadius: "5px",
                border:
                  currentPage === page ? "2px solid #5f4eff" : "1px solid #ccc",
                background: currentPage === page ? "#5f4eff" : "#fff",
                color: currentPage === page ? "#fff" : "#333",
                cursor: "pointer",
                fontWeight: currentPage === page ? "bold" : "normal",
              }}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryResults;
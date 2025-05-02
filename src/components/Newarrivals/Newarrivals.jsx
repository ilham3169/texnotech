import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./newArrivals.css";
import { ClipLoader } from "react-spinners";

const productUrl = (product) =>
  `/products/${product.name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "")}-${product.id}`;

const Flashcard = ({ addToCart }) => {
  const [productItems, setProductItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cachedData = localStorage.getItem("newArrivals");
        if (cachedData) {
          setProductItems(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch("https://back-texnotech.onrender.com/products/new-arrivals");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProductItems(data);
        localStorage.setItem("newArrivals", JSON.stringify(data));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return productItems
      .filter((product) => product.is_new && product.is_active)
      .map((product) => (
        <div key={product.id}>
          <Link to={{ pathname: productUrl(product), state: { productId: product.id } }}>
            <div className="box">
              <div className="img">
                <img src={product.image_link} alt={product.name} loading="lazy" />
              </div>
              <div className="discount-badge">
                <span className="discount-text">
                  -{Math.round(((product.price - product.discount) / product.price) * 100)}%
                </span>
              </div>
              {/* Remove the name truncation and allow it to wrap naturally */}
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                {product.name}
              </h4>
            </div>
          </Link>
          <div className="price price-container">
            <span style={{ display: "block", textAlign: "center", fontWeight: "600" }}>
              {product.discount} AZN
            </span>
            <span
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "line-through",
                color: "grey",
                paddingLeft: "7%"
              }}
            >
              {product.price} AZN
            </span>
            <button
              aria-label="Add to cart"
              onClick={() => addToCart(product)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "scale(1.2)",
                background: "transparent",
                cursor: "pointer",
                paddingLeft: "5 %"
              }}
            >
              <i className="fa fa-plus" style={{ color: "red", padding: "50% 0 60% 0" }}></i>
            </button>
          </div>
        </div>
      ));
  }, [productItems, addToCart]);

  if (loading || error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        {loading ? <ClipLoader color="#3498db" size={50} /> : <div>Error: {error.message}</div>}
      </div>
    );
  }

  return (
    <section className="newarrivals background">
      <div className="container">
        <div className="heading">
          <img
            src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
            alt="new-arrivals-logo"
          />
          <h2>Yeni Gələn Məhsullar</h2>
        </div>
        <div className="content product-new-arrival">{filteredProducts}</div>
      </div>
    </section>
  );
};

export default Flashcard;
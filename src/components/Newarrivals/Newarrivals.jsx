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
        if (cachedData && cachedData.length > 2) {
          setProductItems(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://back-texnotech.onrender.com/products/new-arrivals"
        );
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
        <div key={product.id} className="product-card">
          <div className="box">
            <div className="img-container">
              <Link
                to={{
                  pathname: productUrl(product),
                  state: { productId: product.id },
                }}
              >
                <div className="img">
                  <img
                    src={product.image_link}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>
              </Link>
              {product.discount > 0 && (
                <div className="discount-badge">
                  <span className="discount-text">
                    -
                    {Math.round(
                      ((product.price - product.discount) / product.price) * 100
                    )}
                    %
                  </span>
                </div>
              )}
            </div>

            <div className="product-info">
              <Link
                to={{
                  pathname: productUrl(product),
                  state: { productId: product.id },
                }}
              >
                <h4 className="product-title">
                  {product.name.length > 30
                    ? product.name.substring(0, 30) + "..."
                    : product.name}
                </h4>
              </Link>

              <div className="price-container">
                <span className="current-price">{product.discount} AZN</span>
                {product.discount > 0 && (
                  <span className="original-price">{product.price} AZN</span>
                )}

                <button
                  aria-label="Add to cart"
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn"
                >
                  <i className="fa fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ));
  }, [productItems, addToCart]);

  if (loading) {
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <ClipLoader color="#3498db" size={50} />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              color: "#e94560",
            }}
          >
            Error: {error.message}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
    {filteredProducts.length > 0 ? (
      <section className="newarrivals background">
      <div className="container">
        <div className="heading">
          <img
            src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
            alt="new-arrivals-logo"
          />
          <h2>Yeni Gələn Məhsullar</h2>
        </div>
        <div className="content product-new-arrival">
          {filteredProducts}
        </div>
      </div>
    </section>
    ) : (
      <></>
    )}
    </>
    
  );
};

export default Flashcard;

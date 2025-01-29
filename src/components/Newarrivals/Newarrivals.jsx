import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./newArrivals.css";

const Flashcard = () => {
  const [productItems, setProductItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://back-texnotech.onrender.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProductItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const productUrl = (product) => 
    `/products/${product.name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^a-z0-9-]/g, '')}-${product.id}`;
  
  return (
  <>
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
          {productItems.filter((product) => product.is_new).map((product, index)=> (
            <Link
              to={{
                pathname: productUrl(product),
                state: { productId: product.id },
              }}
              key={index}
            >
              <div className="box">
                <div className="img">
                  <img src={product.image_link} alt={product.name} />
                </div>
                {product.name.length > 25 ?  
                  <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                    {product.name.slice(0, 22)}...
                  </h4>
                  :
                  <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                    {product.name}
                  </h4>
                }
                <span style={{ display: "block", textAlign: "center" }}>
                  {product.price} AZN
                </span>
                <i className="fa fa-plus"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);
};

export default Flashcard;

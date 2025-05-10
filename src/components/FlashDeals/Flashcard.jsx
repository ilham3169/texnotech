import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ClipLoader } from "react-spinners";

// Next and Prev Arrow components remain unchanged
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button aria-label="Next slide" className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button aria-label="Previous slide" className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const Flashcard = ({ addToCart }) => {
  const [productItems, setProductItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://back-texnotech.onrender.com/products/is_super");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProductItems(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await fetch("https://back-texnotech.onrender.com/images");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProductImages(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
    fetchImages();
  }, []);

  if (loading) {
    return (
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
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {productItems
        .filter((product) => product.is_active)
        .map((product, index) => {
          const productUrl = `/products/${product.name
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^a-z0-9-]/g, "")}-${product.id}`;

          return (
            <div className="box" key={index}>
              <div
                className="product"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "450px", // Fixed height for the entire card
                  justifyContent: "space-between",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                <div className="img" style={{ flex: "0 0 auto" }}>
                  <Link
                    to={{
                      pathname: productUrl,
                      state: { productId: product.id },
                    }}
                  >
                    {product.discount > 0 ? (
                      <span className="discount" style={{ fontSize: "15px" }}>
                        -{Math.round(((product.price - product.discount) / product.price) * 100)}%
                      </span>
                    ) : null}
                    <div
                      style={{
                        height: "250px", // Fixed height for image container
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain", // Ensures image fits without stretching
                        }}
                        src={product.image_link}
                        alt={product.name}
                      />
                    </div>
                    <h3
                      title={product.name}
                      className="truncate"
                      style={{
                        textAlign: "center",
                        margin: "10px 0",
                        fontSize: "16px",
                        height: "40px", // Fixed height for title
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {product.name.slice(0, 28)}
                    </h3>
                  </Link>
                </div>

                <div
                  className="product-details"
                  style={{
                    flex: "0 0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="price"
                    style={{
                      gap: "5px",
                      height: "50px",
                    }}
                  >
                    <h4 style={{
                      fontSize: "20px",
                      margin: "0",
                      paddingLeft: "0px"
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
                  </div>
                </div>

                <div style={{ flex: "0 0 auto", textAlign: "center" }}>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#5f4eff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      width: "90%",
                      height: "40px",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-cart-plus"></i> Səbətə əlavə et
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </Slider>
  );
};

export default Flashcard;
import React, { useState, useEffect } from "react"; // Added useEffect import
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ClipLoader } from "react-spinners";


// setting up arrows to display next and previous arrows and make them work
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
        const response = await fetch("https://texnotech.store/products");
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
        const response = await fetch("https://texnotech.store/images");
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
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh"
      }}>
        <ClipLoader color="#3498db" size={50} />
      </div>
    ) 
  }

  if (error) {
    return <div>Error: {error.message}</div>;  // Show error if fetch fails
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
    <>
    <Slider {...settings}>
      {productItems
        .filter((product) => product.is_super) 
        .map((product, index) => {
          const productUrl = `/products/${product.name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '')}-${product.id}`;

          return (
            <div className="box" key={index}>
              <div className="product">
                
                <div className="img">
                  <Link
                    to={{
                      pathname: productUrl,
                      state: { productId: product.id }, // Pass productId as state
                    }}
                  >
                    {product.discount > 0 ?
                      <span className="discount" style={{fontSize: "15px"}}>
                        -{Math.round((product.price - product.discount)  / product.price * 100)}%
                      </span>
                      :
                      <></>
                    }
                    <div style={{height: "300px", with: "200px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
                      <img style={{maxHeight: "100%", maxWidth: "100%", objectFit: "contain"}} src={product.image_link} alt={product.name} />
                    </div>
                    <h3 title={product.name} lassName="truncate" style={{display: "flex", justifyContent: "center", overflow: "clip"}}>
                      {product.name.slice(0, 28)}
                    </h3>
                  </Link>
                </div>

                <div className="product-details" style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                  <div className="price" style={{height: "60%", display: 'flex', justifyContent: "center", alignItems: "center", gap: "5%"}}>
                    
                    <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                      <h4 style={{paddingLeft: "0px"}}>
                        {product.discount} AZN &nbsp;
                        <span style={{textDecoration: "line-through", color: "grey", fontWeight: "500"}}>{product.price} AZN
                        </span>
                      </h4>
                    </div>

                    <div>
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
            </div>
          );
        })}
    </Slider>

    </>
  );
};

export default Flashcard;

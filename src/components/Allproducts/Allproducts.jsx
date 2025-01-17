import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";

const Allproducts = ({ addToCart }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [allProducts, setAllProducts] = useState([]); // For storing products
  const [brandNames, setBrandNames] = useState([]); // For storing brand names
  const [categoryNames, setCategoryNames] = useState([]); // For storing category names
  
  const handlePriceRangeChange = (e) => {
    const newValue = e.target.value;
    setPriceRange({ ...priceRange, max: newValue });
  };

  useEffect(() => {
    // Fetch products
    fetch("https://back-texnotech.onrender.com/products")
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
        const brandNames = data.map((brand) => brand.name);
        setBrandNames(brandNames);
      })
      .catch((error) => console.error("Error fetching brands:", error));

    // Fetch categories
    fetch("https://back-texnotech.onrender.com/categories")
      .then((response) => response.json())
      .then((data) => {
        const categoryNames = data.map((category) => category.name);
        setCategoryNames(categoryNames);
      })
      .catch((error) => console.error("Error fetching categories:", error));

    }, []);

  return (
    <>
      <div className="filter-box">
        <select className="filter-select">
          <option value="popular">Brend Seçin</option>
          {brandNames.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
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
            max="1000"
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
          />
        </div>
      </div>

      <div className="categories-container">
        {categoryNames.map((category, index) => (
            <button className="category-button" key={index} value={category}>
              {category}
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
                  <div className="price">
                    <h4>{product.price}.00 </h4>
                    <button
                      aria-label="Add to cart"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents triggering Link click
                        addToCart(product);
                      }}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
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




// return (
//   <div className="custom-box" key={index}>
//     <div className="product mtop" style={{ width: '250px' }}>
//       <div className="img">
//         <span className="discount">{product.discount}% Off</span>
//         <img src={product.img} alt="product-image" />
//       </div>
//       <div className="product-details">
//         <h3>{product.name}</h3>
//         <Link to={`/all-products/${product.id}`}>
//           <h5>Click here for more Info</h5>
//         </Link>
//         <div className="rate">
//           <i className="fa fa-star"></i>
//           <i className="fa fa-star"></i>
//           <i className="fa fa-star"></i>
//           <i className="fa fa-star"></i>
//           <i className="fa fa-star"></i>
//         </div>
//         <div className="price">
//           <h4>{product.price}.00</h4>
//           <button
//             aria-label="Add to cart"
//             onClick={() => addToCart(product)}
//           >
//             <i className="fa fa-plus"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// })}
// </div>
// </>
// );
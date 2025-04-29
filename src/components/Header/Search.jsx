import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Search = ({ cartItems }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [allProducts, setAllProducts] = useState([])


  useEffect(() => {
    const handler = setTimeout(() => {
      if(searchText.length == 0){
        setAllProducts([])
        setShowDropdown(false);
      }
    }, 500); // Adjust delay (500ms)

    return () => {
      clearTimeout(handler); // Clear timeout if user keeps typing
    };
  }, [searchText]);


  const handleSearch = () => {
    fetch("https://back-texnotech.onrender.com/products?search_query=" + searchText)
      .then((response) => response.json())
      .then((data) => {
        const products = data.map((product) => ({
          name: product.name,
          id: product.id,
        }));

        if(products.length > 0) {
          setAllProducts(products);
          setShowDropdown(true);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }

  return (
    <>
      <section className="search" style={{width: "100%"}}>
        <div className="header-container c_flex">
          <div className="logo width">
            <Link aria-label="Texnotech" to="/">
              <img src="/assets/main-logo/logo.jpg" alt="" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search" onClick={handleSearch}/>
            <input 
              style={{fontSize: "15px"}}
              value={searchText} 
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowDropdown(allProducts.length > 0)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              type="text" placeholder="Axtarış edin..."
            />
          </div>

          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle" style={{color: "black"}}></i>
                <span>{cartItems.length === 0 ? 0 : cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>

        <div>
          {/* Dropdown for search results */}
          {showDropdown && allProducts && (
            <div>
              <ul className="search-dropdown">
                {allProducts.map((product) => {
                  const productUrl = `/products/${product.name
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^a-z0-9-]/g, '')}-${product.id}`;
                                    
                  return (
                    <Link
                      key={product.id}
                      to={{
                        pathname: productUrl,
                        state: { productId: product.id }, // Pass productId as state
                      }}
                    >
                      <li  onClick={() => setSearchText(product.name)}>
                        {product.name}
                      </li>
                    </Link>
                    )
                })}
              </ul>
            </div>
            
          )}
        </div>

      </section>
    </>
  );
};

export default Search;

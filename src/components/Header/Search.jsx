import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Search.css";


const Search = ({ cartItems }) => {
  const navigate = useNavigate();

  const cities = [
    "Bakı", "Ağcabədi", "Ağdam", "Ağdaş", "Ağdərə", "Ağstafa", "Ağsu", "Astara",
    "Bərdə", "Beyləqan", "Biləsuvar", "Cəbrayıl", "Cəlilabad", "Daşkəsən", "Füzuli", "Gədəbəy", "Gəncə",
    "Goranboy", "Göyçay", "Göygöl", "Hacıqabul", "İmişli", "İsmayıllı", "Kəlbəcər", "Kürdəmir", "Laçın",
    "Lənkəran", "Lerik", "Masallı", "Mingəçevir", "Naftalan", "Naxçıvan", "Neftçala", "Oğuz", "Qax", "Qazax",
    "Qəbələ", "Qobustan", "Quba", "Qubadlı", "Qusar", "Saatlı", "Sabirabad", "Şabran", "Salyan", "Şamaxı",
    "Samux", "Şəki", "Şəmkir", "Şirvan", "Siyəzən", "Sumqayıt", "Şuşa", "Tərtər", "Tovuz", "Ucar", "Xaçmaz",
    "Xankəndi", "Xırdalan", "Xızı", "Xocalı", "Xocavənd", "Yardımlı", "Yevlax", "Zaqatala", "Zəngilan", "Zərdab"
  ];

  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [showCityModal, setShowCityModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bakı");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchText.length === 0) {
        setAllProducts([]);
        setShowDropdown(false);
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [searchText]);

  const handleSearch = () => {
    fetch("https://back-texnotech.onrender.com/products?search_query=" + searchText)
      .then((response) => response.json())
      .then((data) => {
        const products = data.map((product) => ({
          name: product.name,
          id: product.id,
        }));
        if (products.length > 0) {
          setAllProducts(products);
          setShowDropdown(true);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search-result?query=${encodeURIComponent(searchText)}`);
      setShowDropdown(false);
    }
  };

  return (
    <>
      <section className="search" style={{ width: "100%" }}>
        <div className="header-container c_flex">
          <div className="logo width">
            <Link aria-label="Texnotech" to="/">
              <img src="/assets/main-logo/logo.jpg" alt="logo" />
            </Link>
          </div>

          <div className="geo-location-container" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => setShowCityModal(true)}>
            <img style={{ width: "30px", paddingTop: "3px", marginRight: "5px" }} src="/assets/geo.png" alt="geo icon" />
            <div>{selectedCity}</div>
          </div>

          <form onSubmit={handleSearchSubmit} className="search-box f_flex">
            <i className="fa fa-search" onClick={handleSearch} />
            <input
              style={{ fontSize: "15px" }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowDropdown(allProducts.length > 0)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              type="text"
              placeholder="Axtarış edin..."
            />
          </form>

          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle" style={{ color: "black" }}></i>
                <span>{cartItems.length === 0 ? 0 : cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>

        <div>
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
                        state: { productId: product.id },
                      }}
                    >
                      <li onClick={() => setSearchText(product.name)}>
                        {product.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>

      {showCityModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={() => setShowCityModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              maxHeight: "80vh",
              overflowY: "auto",
              width: "700px",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Şəhərinizi seçin</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              textAlign: "center"
            }}>
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setShowCityModal(false);
                  }}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    backgroundColor: city === selectedCity ? "#5f4dee" : "#f0f0f0",
                    color: city === selectedCity ? "#fff" : "#000",
                    fontWeight: city === selectedCity ? "bold" : "normal"
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;

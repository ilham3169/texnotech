import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header-container">
        <div className="menu-items">
          <div className="categories">
          </div>
          <ul
            className={
              mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link aria-label="Home" className="link-hover" to="/" 
              style={{textDecoration: "none", color: "black"}}>
                Əsas Səhifə
              </Link>
            </li>
            <li>
              <Link
                aria-label="All Products"
                className="link-hover"
                to={{
                  pathname: `/all-products/-1`,
                  state: { categoryId: -1 }, // Pass productId as state
                }}
                style={{textDecoration: "none", color: "black"}}
              >
                Bütün Məhsullar
              </Link>
            </li>
            {/* <li>
              <Link aria-label="Login" className="link-hover" to="/login" 
              style={{textDecoration: "none", color: "black"}}>
                Giriş
              </Link>
            </li>
            <li>
              <Link
                aria-label="Registration"
                className="link-hover"
                to="/registration"
                style={{textDecoration: "none", color: "black"}}
              >
                Qeydiyyat
              </Link>
            </li> */}
          </ul>
        </div>
        <button
          aria-label="Menu bar"
          className="toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <i className="fas fa-times close home-btn"></i>
          ) : (
            <i className="fa fa-bars open"></i>
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;

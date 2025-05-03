import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // hide non-sticky parts of navbar on scroll down
      } else {
        setShowNavbar(true); // show non-sticky parts of navbar on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="nav-link-bar">
        <ul
          className={
            mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
          }
          onClick={() => setMobileMenu(false)}
        >
          <li>
            <Link
              aria-label="Home"
              className="link-hover"
              to="/"
              style={{ textDecoration: "none", color: "black", fontSize: 25}}
            >
              Əsas Səhifə
            </Link>
          </li>
          <li>
            <Link
              aria-label="All Products"
              className="link-hover"
              to={{
                pathname: `/all-products/-1`,
                state: { categoryId: -1 },
              }}
              style={{ textDecoration: "none", color: "black" , fontSize: 25}}
            >
              Bütün Məhsullar
            </Link>
          </li>
        </ul>
      </div>
      <header className={`header-container ${showNavbar ? "show" : "hide"}`}>
        <div className="menu-items">
          <div className="categories"></div>
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
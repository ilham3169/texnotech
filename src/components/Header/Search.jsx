import React from "react";
import { Link } from "react-router-dom";

const Search = ({ cartItems }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search" style={{width: "100%"}}>
        <div className="header-container c_flex">
          <div className="logo width">
            <Link aria-label="Daraz Home" to="/">
              <img src="/assets/main-logo/logo.jpg" alt="" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Axtarış edin..." />
            <span>Bütün Növlər</span>
          </div>

          <div className="icon f_flex width">
            <Link aria-label="Login page" to="/login">
              <i className="fa fa-user icon-circle" style={{color: "black"}}></i>
            </Link>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle" style={{color: "black"}}></i>
                <span>{cartItems.length === 0 ? 0 : cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

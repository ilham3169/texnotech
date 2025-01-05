import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="">
        <h2>About Us</h2>
        <ul>
          <li>Careers</li>
          <li>Our Stories</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="">
        <h2>Customer Care</h2>
        <ul>
          <li>Help Center</li>
          <li>How To Buy</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>
      <div className="">
        <h2>Contact Us</h2>
        <ul>
          <li>Sumsumsumsumqayıt</li>
          <li className="contact-info-flex">
            Email :
            <a
              target="_blank"
              href="mailto:xxxxxxxx@gmail.com"
              className="icon-flex phone-icon"
            >
              xxxxxxxx@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
            Telefon :{" "}
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=994775116975"
              className="icon-flex phone-icon"
            >
              +994775116975
            </a>
          </li>
          <li>
          <div style={{display: "flex", gap:"1.5vh", fontSize: "30px"}}>
            <FaFacebook/>
            <FaInstagram/>
            <FaYoutube/>
            <FaWhatsapp/>
            <FaTelegram/>
          </div>
          </li>
        </ul>
      </div>

      <div className="">
        <img src="/assets/main-logo/logo.jpg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
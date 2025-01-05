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
          <li>12/2 Shat Masjid Road, Dhanmondi, Dhaka</li>
          <li className="contact-info-flex">
            Email :
            <a
              target="_blank"
              href="mailto:arshadchowdhury46@gmail.com"
              className="icon-flex phone-icon"
            >
              arshadchowdhury46@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
            Phone :{" "}
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=8801317089432"
              className="icon-flex phone-icon"
            >
              +8801317089432
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
        <img src="/assets/main-logo/logo.jpg.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;

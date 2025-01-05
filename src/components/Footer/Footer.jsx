import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="">
        <h2>Məlumat</h2>
        <ul>
          <li>Konfidensiallıq siyasəti</li>
          <li>Qiymət siyasəti</li>
          <li>Saytın istifadə şərtləri</li>
          <li>Korporativ satışlar</li>
        </ul>
      </div>
      <div className="">
        <h2>Müştərilər üçün</h2>
        <ul>
          <li>Trade-in</li>
          <li>Çatdırılma və ödəmə</li>
          <li>Geri qaytarma siyasəti</li>
          <li>Zəmanətlər</li>
          <li>Naxçıvana çatdırılma</li>
        </ul>
      </div>
      <div className="">
        <h2>Kontakt</h2>
        <ul>
          <li>12/2 Shat Masjid Road, Dhanmondi, Dhaka</li>
          <li className="contact-info-flex">
            <a
              target="_blank"
              href="mailto:arshadchowdhury46@gmail.com"
              className="icon-flex phone-icon"
            >
              arshadchowdhury46@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
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

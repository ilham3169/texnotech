import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="">
        
       <h2>Çağrı mərkəzi</h2>
        <li style={{fontSize:'17px'}}>+994705854432</li>

        <br/><h2>İş saatları</h2>
        <ul>
          <li>Hər gün - 9:00 –- 19:00</li>
        </ul>

        
        <br/><h2>Bizi izləyin</h2>
        <ul class="logo-container">
          <li class="logo-item">
            <img src="https://umico.az/images/footer-whatsapp.svg" alt="Whatsapp logo" />
            <span>Whatsapp</span>
          </li>
          <li class="logo-item">
            <img src="https://umico.az/images/footer-instagram.svg" alt="Whatsapp logo" />
            <span>Instagram</span>
          </li>
          <li class="logo-item">
            <img src="https://umico.az/images/footer-tiktok.svg" alt="Whatsapp logo" />
            <span>TikTok</span>
          </li>
        </ul>


      </div>
      <div className="">
        <h2>Müştərilər üçün</h2>
        <ul>
          <li>Çatdırılma və istifadə şərtləri</li>
          <li>Məhsulun geri qaytarılması şərtləri </li>
          <li>Geri qaytarma siyasəti</li>
          <li>Zəmanət şərtləri</li>
          <li>Kredit şərtləri</li>
        </ul>

        <br />
        <h2>Məlumat</h2>
        <ul>
          <li>Konfidensiallıq siyasəti</li>
          <li>Qiymət siyasəti</li>
          <li>Saytın istifadə şərtləri</li>
          <li>Korporativ satışlar</li>
        </ul>

      </div>
      <div className="">
        <h2>Kontakt</h2>
        <ul>
          <li>Sumqayıt şəhər 9 mk Ü.HACIBƏYOV küçəsi</li>
          <li className="contact-info-flex">
            <a
              target="_blank"
              href="mailto:xxxxxxxx@gmail.com"
              className="icon-flex phone-icon"
            >
              xxxxxxxxxxx@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=994775116975"
              className="icon-flex phone-icon"
            >
                +994705854432
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

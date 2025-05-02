import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <footer className="footer-container my-footer">
      <div className="">
        
       <h2 className="my-footer-h2">Çağrı mərkəzi</h2>
        <li className="my-footer-li" style={{fontSize:'17px'}}>+994705854432</li>

        <br/><h2 className="my-footer-h2">İş saatları</h2>
        <ul>
          <li className="my-footer-li">Hər gün - 9:00 –- 19:00</li>
        </ul>

        
        <br/><h2 className="my-footer-h2">Bizi izləyin</h2>
        <ul class="my-logo-container">
          <a href="https://wa.me/+994705854432" target="_blank">
            <li className="my-logo-item my-footer-li">
              <img className="my-logo-item-img" src="https://umico.az/images/footer-whatsapp.svg" alt="Whatsapp logo" />
              <span className="my-logo-item-span">Whatsapp</span>
            </li>
          </a>

          <a href="https://www.instagram.com/_texno_tech?igsh=MXdsaWNkejVkNTJ1dQ==" target="_blank">
            <li className="my-logo-item my-footer-li">
              <img className="my-logo-item-img" src="https://umico.az/images/footer-instagram.svg" alt="instagram logo" />
              <span className="my-logo-item-span">Instagram</span>
            </li>
          </a>

          <a href="https://www.tiktok.com/@texnotechmmc?_t=ZS-8tVDmGm19xh&_r=1" target="_blank">
            <li className="my-logo-item my-footer-li">
              <img className="my-logo-item-img" src="https://umico.az/images/footer-tiktok.svg" alt="tiktok logo" />
              <span className="my-logo-item-span">TikTok</span>
            </li>
          </a>
          
        </ul>


      </div>
      <div className="">
        <h2 className="my-footer-h2">Müştərilər üçün</h2>
        <ul>

          <li className="my-footer-li">
            <Link
              to="/delivery" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Çatdırılma və istifadə şərtləri
            </Link>
          </li>

          <li className="my-footer-li">
            <Link
              to="/refund" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Məhsulun geri qaytarılması şərtləri
            </Link>
          </li>

          <li className="my-footer-li">
            <Link
              to="/refund-policy" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Geri qayıtma siyasəti
            </Link>
          </li>

          <li className="my-footer-li">
            <Link
              to="/insurance" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Zəmanət şərtləri
            </Link>
          </li>

          <li className="my-footer-li">
            <Link
              to="/kredit" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Kredit şərtləri
            </Link>
          </li>

        </ul>

        <br />
        <h2 className="my-footer-h2">Məlumat</h2>
        <ul>
          
          <li className="my-footer-li">
            <Link
              to="/konfidensialliq" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Konfidensiallıq siyasəti
            </Link>
          </li>

          <li className="my-footer-li">
           <Link
              to="/price" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Qiymət siyasəti
            </Link>
          </li>
          
          {/* <li className="my-footer-li">
            <a 
              href=""
              style={{ textDecoration: "none", color: "inherit" }}
              target="blank"
            >
              Saytın istifadə şərtləri
            </a>
          </li>
           */}

          <li className="my-footer-li">
            <Link
              to="/korporativ" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Korporativ satışlar
            </Link>
          </li>

        </ul>

      </div>
      <div className="">
        <h2 className="my-footer-h2">Əlaqə</h2>
        <ul>
          
          <li className="contact-info-flex my-footer-li">
            <a 
              target="_blank"
              href="https://maps.app.goo.gl/Tx2RvJUbGUKnNC2e7"
              className="icon-flex phone-icon"
            > 
              Sumqayıt şəhər 9 mk Ü.HACIBƏYOV küçəsi
            </a>
          </li>
          
          <li className="contact-info-flex my-footer-li">
            <a
              target="_blank"
              href="mailto:info@texnotech.store"
              className="icon-flex phone-icon"
            >
              info@texnotech.store
            </a>
          </li>
          <li className="contact-info-flex my-footer-li">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=994775116975"
              className="icon-flex phone-icon"
            >
                +994705854432
            </a>
          </li>
          <li>
            VÖEN - 2906941461
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

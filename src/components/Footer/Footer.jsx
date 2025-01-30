import React from "react";
import "./footer.css";

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
          <li className="my-footer-li">Çatdırılma və istifadə şərtləri</li>
          <li className="my-footer-li">Məhsulun geri qaytarılması şərtləri </li>
          <li className="my-footer-li">Geri qaytarma siyasəti</li>
          <li className="my-footer-li">Zəmanət şərtləri</li>
          <li className="my-footer-li">Kredit şərtləri</li>
        </ul>

        <br />
        <h2 className="my-footer-h2">Məlumat</h2>
        <ul>
          <li className="my-footer-li">Konfidensiallıq siyasəti</li>
          <li className="my-footer-li">Qiymət siyasəti</li>
          <li className="my-footer-li">Saytın istifadə şərtləri</li>
          <li className="my-footer-li">Korporativ satışlar</li>
        </ul>

      </div>
      <div className="">
        <h2 className="my-footer-h2">Kontakt</h2>
        <ul>
          <li className="my-footer-li">Sumqayıt şəhər 9 mk Ü.HACIBƏYOV küçəsi</li>
          <li className="contact-info-flex my-footer-li">
            <a
              target="_blank"
              href="mailto:xxxxxxxx@gmail.com"
              className="icon-flex phone-icon"
            >
              xxxxxxxxxxx@gmail.com
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
        </ul>
      </div>

      <div className="">
        <img src="/assets/main-logo/logo.jpg.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;

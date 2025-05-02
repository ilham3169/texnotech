import React from 'react';
import Head from "../Header/Head"
import Footer from "../Footer/Footer"
import "./Refund.css";


const Refund = () => {
  return (
    <div>
        <Head/>
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Geri Qaytarma Şərtləri</h2>

            <section>
            <p>
                Mağazamız “İstehlakçı hüquqlarının qorunması haqqında” Qanuna uyğun fəaliyyət göstərir.
            </p>
            </section>

            <section>
            <h3>Şəxsi istək əsasında məhsulun geri qaytarılması</h3>
            <p>
                Məhsulu alındığı gündən etibarən <strong>14 gün ərzində</strong> geri qaytara bilərsiniz, əgər:
            </p>
            <ul>
                <li>İstifadə olunmayıb və istifadə izləri yoxdur.</li>
                <li>Ticarət görünüşü və istehlak keyfiyyətləri saxlanılıb.</li>
                <li>Zavod qablaşdırması zədələnməyib.</li>
                <li>Tam komplektasiya saxlanılıb.</li>
                <li>Proqramlar quraşdırılmayıb və aktivləşdirilməyib (elektronika üçün).</li>
                <li>Çeki və ya ödənişi təsdiq edən digər sənəd mövcuddur.</li>
            </ul>
            <p>
                <em>
                Qeyd: Qablaşdırması pozulmuş gigiyenik məhsullar geri qaytarılmır.
                </em>
            </p>
            </section>
        </main>
        <Footer />
    </div>
  );
};

export default Refund;
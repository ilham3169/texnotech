import React from 'react';
import Head from "../Header/Head"
import Footer from "../Footer/Footer"
import "./RefundPolicy.css";


const RefundPolicy = () => {
  return (
    <div>
        <Head/>
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Brak Məhsulun Geri Qaytarılması və Dəyişdirilməsi (Zavod Qüsuru)</h2>

            <section>
            <ol>
                <li>Operatorun göstərişlərinə uyğun olaraq istənilən "TEXNO TECH" satış nöqtəsinə yaxınlaşın və məsləhətçiyə geri qaytarma barədə məlumat verin.</li>
                <li>Ekspert məhsulu yerində yoxlayacaq. Əgər qüsur təsdiqlənərsə, məhsul dəyişdiriləcək və ya pulunuz geri qaytarılacaq.</li>
                <li>Əgər qüsuru dərhal təsdiqləmək mümkün olmazsa, məhsul servis araşdırmasına göndəriləcək.</li>
                <li>Qüsur təsdiqləndikdən sonra, tam dəyəri, o cümlədən çatdırılma xərcləri ilə geri qaytarılacaq.</li>
                <li>Pulun geri qaytarılması alıcının geri qaytardığı məhsulların alışında istifadə etdiyi eyni ödəniş üsulu ilə həyata keçirilir, alıcı fərqli bir qaytarma üsulu barədə açıq şəkildə razılaşmadığı hallar istisna olmaqla. Fərqli ödəyici və alıcı halları: Məhsulu bir şəxs alıb, digər şəxs ödəyibsə (məsələn, hədiyyə), ödəniş məhz sifarişi ödəyən şəxsə qaytarılır, alana yox.</li>
            </ol>
            </section>

            <section>
            <h3>Əlavə Şərtlər</h3>
            <ul>
                <li>Məhsul nağdsız ödənişlə alınarsa, satış nöqtəsi alıcının bankına sorğu göndərir. Pulun geri qaytarılması bank tərəfindən <strong>14 təqvim günü ərzində</strong> həyata keçirilir.</li>
            </ul>
            </section>
        </main>
        <Footer />
    </div>
  );
};

export default RefundPolicy;
import React from 'react';
import Head from "../Header/Head"
import Footer from "../Footer/Footer"
import "./Insurance.css";


const Insurance = () => {
  return (
    <div>
        <Head/>
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Zəmanət Şərtləri</h2>

            <section>
            <h3>Təmirə Təqdim Edilmə Şərtləri</h3>
            <ol>
                <li>
                Müştəri aşağıda tələb edilən sənədlərlə texniki nasazlıq olan məhsulunu servisə təqdim edə bilər:
                <ul>
                    <li>Müştərinin şəxsiyyət vəsiqəsi (məhsul sahibinin);</li>
                    <li>Zərurət yaranarsa, malın dəyərinin ödənilməsi haqqında qəbzlərin əsli və məhsulun qutusu.</li>
                </ul>
                <p>
                    <em>
                    1.1 Məhsul (telefon, notbuk, planşet və s.) təmirə təqdim edildikdə yaddaşında olan məlumat və faylların saxlanılmasına zəmanət verilmir.
                    </em>
                </p>
                </li>
                <li>
                Aşağıdakı hallarda zəmanət qüvvədən düşmüş hesab edilir:
                <ul>
                    <li>Məhsul təmir üçün digər servis və ya üçünçü şəxslərə təqdim edilərək kənar müdaxilə edilərsə;</li>
                    <li>TEXNO TECH-ə olan hissəvi ödəniş gecikdiriləcək müqavilə şərtləri pozularsa.</li>
                </ul>
                </li>
            </ol>
            </section>
        </main>
        <Footer />
    </div>
  );
};

export default Insurance;
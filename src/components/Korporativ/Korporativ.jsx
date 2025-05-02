import React from 'react';
import Head from "../Header/Head"
import Footer from "../Footer/Footer"
import "./Korporativ.css";


const Korporativ = () => {
  return (
    <div>
        <Head/>
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Texno Tech Korporativ Xidmətləri</h2>

            <section>
            <p>
                Texno Tech – müxtəlif növ yüksək keyfiyyətli rəqəmsal və məişət texnikasının, həmçinin mebellərin pərakəndə satışını həyata keçirməklə yanaşı korporativ müştərilərlə əməkdaşlığa xüsusi diqqət yetirir.
            </p>
            <p>
                Hal-hazırda 2000-dən çox korporativ müştəri sayı ilə nəinki Azərbaycan bazarında, hətta Qafqazda da qısa müddət ərzində lider mövqelərdən birini tutmağı bacarıb.
            </p>
            </section>

            <section>
            <h3>Korporativ Əməkdaşlıq Şərtləri</h3>
            <p>
                Korporativ sahədə fərdi yanaşma prinsipi ilə hərəkət edən Texno Tech-ın partnyor şirkətlər üçün eksklüziv şərtlərlə əməkdaşlıq təklifləri aşağıdakı kimidir:
            </p>
            <ul>
                <li>Əməkdaşlıq etdiyimiz şirkətlər üçün xüsusi endirimli qiymətlər;</li>
                <li>Korporativ müştərilərə kreditlə satış xidməti;</li>
                <li>Əməkdaşlıq müddətində ödənişlərini köçürmə yolu ilə edə bilmək imkanı;</li>
                <li>Telefon, notbuk, kondisioner, mikrodalğalı soba və bu kimi digər elektrotexnika vasitələrinin təmini;</li>
                <li>Dispenser, printer və bu kimi ofis avadanlıqlarını əldə etmək imkanı;</li>
                <li>Saytımızda əks olunan məhsullarla yanaşı, orada mövcud olmayan məhsulları belə öncədən sifarişlə əldə edə bilmə imkanı.</li>
            </ul>
            </section>

            <section>
            <h3>Əlaqə Vasitələri</h3>
            <p>
                Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə uyğun olanını seçə bilərsiniz:
            </p>
            <ul>
                <li><strong>Telefon:</strong> +994105116974</li>
            </ul>
            </section>
        </main>
        <Footer />
    </div>
  );
};

export default Korporativ;
import React from 'react';
import Head from "../Header/Head"
import Footer from "../Footer/Footer"
import "./Kredit.css";


const Kredit = () => {
  return (
    <div>
        <Head/>
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Hissə-hissə Ödənişlə Məhsul Alanlara Standart Tələblər</h2>

            <section>
            <h3>Ümumi Şərtlər</h3>
            <ul>
                <li><strong>Ödəniş valyutası:</strong> Manat</li>
                <li><strong>Xidmət haqqı:</strong>
                <ul>
                    <li>Məişət texnikası – 5-12%</li>
                    <li>Elektronika – 5-12%</li>
                    <li>Mobil telefon – 5-12%</li>
                    <li>Mebel – 0%</li>
                </ul>
                </li>
                <li><strong>Sığorta:</strong> 0%</li>
                <li><strong>Müştərinin yaşı:</strong> 18 yaşına çatmış Azərbaycan Respublikasının vətəndaşı</li>
                <li><strong>Tələb edilən sənədlər:</strong> Yalnız şəxsiyyət vəsiqəsi. Şəxsiyyət vəsiqəsi təqdim edə bilməyən dövlət qulluqçuları (hərbçilər və s.) şəxsiyyət vəsiqəsini əvəz edən sənədi təqdim etməklə hissə-hissə ödənişlə məhsul əldə edə bilər.</li>
                <li><strong>Qeydiyyatı:</strong> Azərbaycan Respublikası</li>
                <li><strong>Yaşayış yeri:</strong> Azərbaycan Respublikası</li>
            </ul>
            </section>

            <section>
            <h3>Hissə-hissə Ödəniş Şərtləri</h3>
            <p>
                TEXNO TECH mağazalarında hər növ rəqəmsal texnika, məişət texnikası, mebellər <strong>35 ayadək</strong> hissə-hissə ödəniş şərtləri ilə müştərilərə təqdim olunur.
            </p>
            </section>

            <section>
            <h3>Təkrar Müştərilərə Güzəştli Şərtlər</h3>
            <p>
                TEXNO TECH mağazaları təkrar müştərilərinə güzəştli xidmət haqqı, ilkin ödənişsiz, güzəştli hissə-hissə ödənişlə məhsul almağı təklif edir. Əvvəlki alışları zamanı gecikmələri olmayan sadiq müştərilərimiz TEXNO TECH mağazalarından hissə-hissə ödənişlə aldıqları məhsulları ilkin ödənişsiz əldə edə bilərlər. Hər zaman təkrar müştərilərinə dəyər verən TEXNO TECH mağazaları onlara sərfəli şərtlərlə geniş çeşiddə və müxtəlif brendlərdən olan məhsulları təklif etməyə davam edir.
            </p>
            </section>
        </main>
        <Footer />
    </div>
  );
};

export default Kredit;
import React from 'react';
import Head from "../Header/Head"
import Footer from "../Footer/Footer"
import "./Price.css";


const Price = () => {
  return (
    <div>
        <Head/>
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Sayt və Mağazalarda Apardığımız Qiymət Siyasəti</h2>

            <section>
            <ol>
                <li><strong>Xüsusi kampaniyalar:</strong> Bəzi təkliflər yalnız mağazalarımıza, bəziləri isə yalnız saytımıza şamil oluna bilər. Belə hallarda mağaza və sayt arasında fərq mövcud ola bilər.</li>
                <li><strong>Coğrafi fərqliliklər:</strong> Müxtəlif bölgələrdəki mağazalarımızda qiymətlər iqtisadi şərtlərə və logistika xərclərinə görə dəyişə bilər.</li>
                <li><strong>Xüsusi endirimlər:</strong> Müəyyən mağazalarda xüsusi endirimlər ola bilər. Bu da digər mağazalar və saytla müqayisədə qiymət müxtəlifliyinə gətirib çıxara bilir.</li>
                <li><strong>Stok fərqi:</strong> Stok vəziyyətinə görə mağaza və sayt qiymətləri fərqli ola bilər.</li>
                <li><strong>Sistem yenilənmələri:</strong> Texniki yenilənmələr zamanı müvəqqəti qiymət fərqləri yarana bilər. Bu fərq yenilənmə başa çatdıqdan sonra qısa müddət ərzində aradan qaldırılır.</li>
            </ol>
            </section>
        </main>
        <Footer />
    </div>
  );
};

export default Price;
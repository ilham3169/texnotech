import React from 'react';
import Head from "../Header/Head"
import Footer from "../Footer/Footer"
import "./Delivery.css";


const Delivery = () => {
  return (
    <div>
      <Head/>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>Çatdırılma və Ödəmə Şərtləri</h2>

        <section>
          <h3>Çatdırılma</h3>
          <p>
            Qeyd olunan ünvana çatdırılma saat <strong>10:00 - 18:00</strong> arasında yerinə yetirilir.
          </p>
          <p>
            Çatdırılma, razılaşdırılmış vaxtda göstərilən ünvanda olmağınızı məcbur edir. Kuryer yola
            düşməzdən təxminən <strong>bir və ya iki saat əvvəl</strong> sizinlə əlaqə saxlayacaq.
          </p>
          <p>
            Online qaydada məhsul əldə etmək istəyən müştərinin müraciəti rəsmiləşdirildikdən və
            sifariş təsdiqləndikdən sonra, məhsulun çatdırılma vaxtının dəqiqləşdirilməsi üçün müştəri
            ilə əlaqə saxlanılacaq. Əgər müştəri, çatdırılma üçün təklif edilən gündə məhsulu təhvil
            ala bilməyəcəksə, müştərinin əldə etmək istədiyi məhsul sifarişin təsdiqləndiyi gündən{' '}
            <strong>7 (yeddi) gün ərzində</strong> onun adına saxlanılacaqdır. Bu müddət bitdikdən
            sonra müştərinin sifarişi ləğv ediləcəkdir.
          </p>
          <p>
            <em>
              *Qeyd olunan qayda məhsul üçün ödəniş edilməyən sifarişlərə və bütün çatdırılma
              növərinə şamil edilir.
            </em>
          </p>
        </section>

        <section>
          <h3>Sifarişin Təhvil Verilməsi</h3>
          <p>
            Qeyd edilən ünvana çatdırılma dəhlizlərdə və keçidlərdə heç bir maneə olmamaq şərti ilə
            qeyd etdiyiniz yerlərə yerinə yetirilir. Keçidlərin, qapıların, dəhlizlərin, pilləkənlərin
            eni, hündürlüyü və uzunluğu qablaşdırmada olan məhsuldan ən azı <strong>5 santimetr</strong> böyük olmalıdır.
          </p>
          <p>
            Əgər qeyd etdiyiniz yerdəki şərtlər məhsulların çatdırılmasına mane edirsə və ya onları
            zədələyə bilərsə, məhsullar qeyd edilən ünvana ən yaxın olan yerə çatdırılacaq. Kuryer
            ərazini maneələrdən təmizləmir, otaqdakı obyektlərin yerini dəyişdirməklə məşğul olmur.
          </p>
          <p>
            Kuryerin vəzifələrinə məhsulların istismarı, xüsusiyyətləri, quraşdırılması və
            tənzimlənməsi üzrə məsləhətlər daxil deyil.
          </p>
        </section>

        <section>
          <h3>Sifarişin Yoxlanılması</h3>
          <p>
            Sifarişi qəbul edərkən sifarişi çatdıran şəxsin iştirakı ilə siz yoxlaya bilərsiniz:
          </p>
          <ul>
            <li>Sifarişin xarici görünüşünü və qablaşdırılmasını</li>
            <li>Sifarişdə olan məhsulların sayını</li>
            <li>Komplektlik və müşayiət olunan sənədlərin mövcudluğunu</li>
            <li>
              Çatdırılmanı həyata keçirən şəxsin iştirakı ilə məhsulların texniki xüsusiyyətlərini
              yoxlamaq hüququnuz var.
            </li>
          </ul>
        </section>

        <section>
          <h3>Sifarişin Təhvil Alınması</h3>
          <p>
            Çatdırılma zamanı sifariş sizə və ya sifarişi alan kimi qeyd olunan şəxsə təhvil verilir.
            Nağd şəkildə verilən sifarişi təhvil almaq mümkün olmadıqda, sifariş onun haqqında məlumat
            verməyə (göndərmə nömrəsi və/və ya alıcının tam adı), habelə sifarişin dəyərini tam
            şəkildə ödəməyə hazır olan şəxsə təhvil verilir.
          </p>
          <p>
            Sifariş məhsulların təhvil verilməsi və çatdırılmanı təsdiq edən müşayiətedici sənədlərin
            imzalanması ilə sizə çatdırılmış hesab olunur. Müşayiət olunan sənədlər sizə elektron
            formada da təqdim edilə bilər.
          </p>
          <p>
            <strong>
              Azərbaycan Respublikasının hüdudlarından kənara çatdırılma (malların ixracı) həyata
              keçirilmir.
            </strong>
          </p>
        </section>

        <section>
          <h3>Çatdırılma Müddəti</h3>
          <p>
            Sifariş logistika şöbəsi tərəfindən qəbul edildikdən sonra, sifariş üzrə hazırlanmalı olan
            məhsullar istisna olmaqla, məhsullar <strong>24 saat ərzində</strong> ünvana çatdırılır və
            quraşdırılır. Sifarişlə hazırlanan məhsullar istehsalı başa çatan kimi təhvil verilir.
          </p>
        </section>

        <section>
          <h3>Ödəniş Üsulları</h3>
          <p>Mümkün olan ödəniş üsulları:</p>
          <ul>
            <li>Bank kartları ilə onlayn ödəniş</li>
            <li>Kontakt-dan hissə-hissə ödəniş</li>
            <li>KapitalBank (BirKart) taksit kartı ilə onlayn ödəniş</li>
            <li>Sifarişi təhvil alanda KapitalBank (BirKart) taksit kartı ilə ödəniş</li>
            <li>Sifarişi təhvil alanda ABB (Tamkart) taksit kartı ilə ödəniş</li>
            <li>Sifarişi təhvil alanda bank kartı ilə ödəniş</li>
            <li>Sifarişi təhvil alanda nağd ödəniş</li>
            <li>Apple Pay, Google Pay</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Delivery;
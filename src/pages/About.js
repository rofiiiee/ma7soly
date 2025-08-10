import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">منصة محصولي - الابتكار في الزراعة الإلكترونية</h1>
        <p className="about-subtitle">
          منصة **محصولي** هي الحل الشامل لتحويل الزراعة التقليدية إلى تجربة رقمية مبتكرة تدعم المزارعين
          في جميع مراحل تسويق المحاصيل الزراعية.
        </p>
      </header>

      <section className="about-section">
        <h2 className="section-title">رؤيتنا</h2>
        <p className="section-text">
          نسعى لأن نكون الرواد في مجال الزراعة الإلكترونية في مصر، من خلال توفير بيئة رقمية مبتكرة تربط المزارعين
          بأسواق جديدة وتتيح لهم فرصًا أكبر للبيع والشراء بشكل آمن وفعّال.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">ماذا نقدم؟</h2>
        <div className="services-list">
          <div className="service">
            <h3 className="service-title">توصيل آمن وموثوق</h3>
            <p className="service-description">
              نوفر خدمات توصيل فعالة وموثوقة للمحاصيل الزراعية، مع ضمان الأمان وسرعة النقل.
            </p>
          </div>
          <div className="service">
            <h3 className="service-title">فحص جودة المحاصيل</h3>
            <p className="service-description">
              نقدم فحصًا دقيقًا للمحاصيل لضمان الجودة العالية باستخدام أحدث التقنيات في هذا المجال.
            </p>
          </div>
          <div className="service">
            <h3 className="service-title">تخزين ذكي</h3>
            <p className="service-description">
              نقدم حلول تخزين مبتكرة للمحاصيل مع ضمان الحفاظ على جودتها لأطول فترة ممكنة.
            </p>
          </div>
          <div className="service">
            <h3 className="service-title">دعم فني مستمر</h3>
            <p className="service-description">
              فريق الدعم الفني لدينا متاح دائمًا لضمان سير العمليات بكفاءة عالية، وتقديم استشارات للمزارعين.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section contact-box">
        <h2 className="section-title">تواصل معنا</h2>
        <p className="section-text">
          إذا كنت ترغب في الاستفسار أو التعاون معنا، لا تتردد في التواصل عبر البريد الإلكتروني:
        </p>
        <p className="contact-email">leads@mahsooly.com</p>
      </section>
    </div>
  );
};

export default About;

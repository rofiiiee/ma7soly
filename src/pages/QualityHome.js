// QualityHome.js
import React from "react";
import './QualityHome.css';
import { FaCheckCircle, FaClipboardList } from 'react-icons/fa';
import { BsPatchCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

// بيانات المحاصيل
const crops = [
  { id: 1, image: '/images/cotton.png', name: 'قطن', testType: 'تحليل كيميائي', price: 1500, location: 'المنيا' },
  { id: 2, image: '/images/watermelon.png', name: 'بطيخ', testType: 'تحليل بصري', price: 1200, location: 'الفيوم' },
  { id: 3, image: '/images/wheat.png', name: 'قمح', testType: 'اختبار رطوبة', price: 1000, location: 'بني سويف' },
];

// بطاقة المحصول
const CropCard = ({ crop, onClick }) => (
  <div className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
    <img src={crop.image} alt={crop.name} className="product-image" />
    <div className="details">
      <h3 className="product-name">{crop.name}</h3>
      <p><strong>الموقع:</strong> {crop.location}</p>
      <p><strong>نوع الفحص:</strong> {crop.testType}</p>
    </div>
    <div className="price-box">
      السعر المقترح: <strong>{crop.price} ج.م</strong>
    </div>
    <div className="rating-stars">★★★★☆</div>
  </div>
);

const QualityHome = () => {
  const navigate = useNavigate();

  return (
    <div className="quality-home">

      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="overlay">
          <h1>مرحبا بك في <span className="highlight">محصولي</span></h1>
          <p>   مهمتك تبدأ هنا : فحص دقيق ، جودة مضمونة </p>
          <button className="shop-button" onClick={() => navigate('/QualityInspection')}>
            ابدأ الآن
          </button>
        </div>
      </section>

      {/* ===== Crops to Inspect ===== */}
      <section className="products-section">
        <h2 className="services-title">المحاصيل المنتظرة للفحص</h2>
        <div className="products-grid">
          {crops.map(crop => (
            <CropCard
              key={crop.id}
              crop={crop}
              onClick={() => navigate('/QualityInspectionDetails')}
            />
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="cta-section">
        <div className="cta-overlay">
          <button className="cta-button" onClick={() => navigate('/quality_reports')}>
            تقاريري السابقة
          </button>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="services-section">
        <h2 className="services-title">خدمات الفاحص</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaClipboardList className="icon" />
            <h3>المهام الحالية</h3>
            <p>تتبع المحاصيل المطلوب فحصها.</p>
          </div>
          <div className="service-card">
            <BsPatchCheckFill className="icon" />
            <h3>سجل الفحوصات</h3>
            <p>عرض وتحميل تقارير الفحص السابقة.</p>
          </div>
          <div className="service-card">
            <FaCheckCircle className="icon" />
            <h3>تأكيد الجودة</h3>
            <p>اعتمد المحاصيل المطابقة للمواصفات.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityHome;

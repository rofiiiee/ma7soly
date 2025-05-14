// FarmerHome.js
import React from "react";
import './FarmerHome.css';
import { FaSeedling, FaClipboardList, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// بيانات المحاصيل (عينة)
const crops = [
  { id: 1, image: '/images/rice.png',     name: 'أرز أبيض', category: 'حبوب',   stock: '3 طن',  price: 9500 },
  { id: 2, image: '/images/onions.png',   name: 'بصل',      category: 'خضراوات', stock: '2 طن',  price: 6500 },
  { id: 3, image: '/images/oranges.png',  name: 'برتقال',   category: 'فاكهة',   stock: '1 طن',  price: 5200 },
  { id: 4, image: '/images/cotton.png',   name: 'قطن',      category: 'ألياف',   stock: '800 كجم', price: 7800 }
];

// كارت المنتج
const CropCard = ({ crop, onClick }) => (
  <div className="farmpg-product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
    <img src={crop.image} alt={crop.name} className="farmpg-product-image" />
    <div className="farmpg-details">
      <span className="farmpg-product-category">{crop.category}</span>
      <h3 className="farmpg-product-name">{crop.name}</h3>
      <p className="farmpg-product-stock"><strong>المخزون:</strong> {crop.stock}</p>
      <div className="farmpg-product-price">{crop.price} ج/طن</div>
    </div>
    <div className="farmpg-rating-stars">★★★★☆</div>
  </div>
);

const FarmerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="farmpg-farmer-home">

      {/* ===== Hero Section ===== */}
      <section className="farmpg-hero">
        <div className="farmpg-overlay">
          <h1>مرحبا بك في<span className="farmpg-highlight"> محصولي</span></h1>
          <p>شريكك في تسويق المحصول بأمان وبأعلى جودة</p>

          <button
            className="farmpg-shop-button"
            onClick={() => navigate('/farmer')}  // ابدأ الآن يفتح لوحة المزارع
          >
            ابدأ الآن
          </button>

          <div className="farmpg-store-buttons">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              <img src="/images/appstore.png" alt="App Store" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
              <img src="/images/googleplay.png" alt="Google Play" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== Crops Section ===== */}
      <section className="farmpg-products-section">
        <h2 className="farmpg-services-title">العروض التي قدمتها</h2>
        <div className="farmpg-products-grid">
          {crops.map(crop => (
            <CropCard
              key={crop.id}
              crop={crop}
              onClick={() => navigate(`/crop/${crop.id}`)}
            />
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="farmpg-cta-section">
        <div className="farmpg-cta-overlay">
          <button
            className="farmpg-cta-button"
            onClick={() => navigate('/farmer/orders')}   // ← هنا الرابط الذكي
          >
            طلبات الشراء
          </button>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="farmpg-services-section">
        <h2 className="farmpg-services-title">خدمات المزارع</h2>
        <div className="farmpg-services-grid">
          <div className="farmpg-service-card">
            <FaPlus className="farmpg-icon" />
            <h3>إضافة محصول</h3>
            <p>قم بإدراج محصول جديد وتسعيره فوراً.</p>
          </div>
          <div className="farmpg-service-card">
            <FaClipboardList className="farmpg-icon" />
            <h3>إدارة الطلبات</h3>
            <p>تابع طلبات الشراء وقم بتأكيدها أو رفضها.</p>
          </div>
          <div className="farmpg-service-card">
            <FaSeedling className="farmpg-icon" />
            <h3>إحصائيات المزارع</h3>
            <p>شاهد أداء مبيعاتك وتحليلات الموسم.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerHome;

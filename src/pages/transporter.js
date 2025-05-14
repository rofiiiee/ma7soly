// TransporterHome.js
import React from "react";
import './transporter.css';
import { FaStoreAlt, FaTruck } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

// بيانات المنتجات
const products = [
  { id: 1, image: '/images/flax.png', name: 'بذور كتان', category: 'حبوب', from: 'اسوان', to: 'سوهاج', amount: '5 طن', price: '10000' },
  { id: 2, image: '/images/watermelon.png', name: 'بطيخ', category: 'فاكهة', from: 'اسوان', to: 'اسيوط', amount: '5 طن', price: '7000' },
  { id: 3, image: '/images/cotton.png', name: 'قطن', category: 'الياف', from: 'اسوان', to: 'الاقصر', amount: '1 طن', price: '8000' },
  { id: 4, image: '/images/corn.png', name: 'ذرة', category: 'حبوب', from: 'اسوان', to: 'قنا', amount: '5 طن', price: '9000' }
];

// مكون الكارت الواحد
const ProductCard = ({ product, onClick }) => (
  <div className="transpg-product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
    <img src={product.image} alt={product.name} className="transpg-product-image" />
    <div className="transpg-details">
      <span className="transpg-product-category">{product.category}</span>
      <h3 className="transpg-product-name">{product.name}</h3>
      <div className="transpg-shipping-info">
        <p><span>من :</span> {product.from}</p>
        <p><span>الي :</span> {product.to}</p>
        <p><span>الكمية :</span> {product.amount}</p>
      </div>
      <div className="transpg-product-price">
        {product.price} ج/طن
      </div>
    </div>
    <img src="/images/map.png" alt="خريطة" className="transpg-map-image" />
    <div className="transpg-rating-stars">
      ★★★★☆
    </div>
  </div>
);

const TransporterHome = () => {
  const navigate = useNavigate();

  return (
    <div className="transpg-transporter-home">

      {/* ===== Hero Section ===== */}
      <section className="transpg-hero">
        <div className="transpg-overlay">
          <h1>أهلا بك في <span className="transpg-highlight">محصولي</span></h1>
          <p>يمكنك الآن توصيل المحاصيل الزراعية بكل سهولة وأمان</p>

          <button className="transpg-shop-button" onClick={() => navigate('/transport_offers')}>
            تسوق الآن
          </button>

          <div className="transpg-store-buttons">
          <a href="https://www.apple.com/app-store/" target="_blank"><img src="/images/appstore.png" alt="App Store" /></a>
          <a href="https://play.google.com/store" target="_blank"><img src="/images/googleplay.png" alt="Google Play" /></a>
          </div>
        </div>
      </section>

      {/* ===== Products Section ===== */}
      <section className="transpg-products-section">
        <h2 className="transpg-services-title">طلبات الشحن</h2>
        <div className="transpg-products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => navigate('/transporter_requist')}
            />
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="transpg-cta-section">
        <div className="transpg-cta-overlay">
          <button className="transpg-cta-button" onClick={() => navigate('/driver_orders')}>
            عرض الطلبات
          </button>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="transpg-services-section">
        <h2 className="transpg-services-title">خدمات السائق</h2>
        <div className="transpg-services-grid">
          <div className="transpg-service-card">
            <FaTruck className="transpg-icon" />
            <h3>شحناتي الحالية</h3>
            <p>يمكنك متابعة حالة الشحنات النشطة وتفاصيلها.</p>
          </div>
          <div className="transpg-service-card">
            <BsBoxSeam className="transpg-icon" />
            <h3>شحنات جديدة</h3>
            <p>استعرض الشحنات المتاحة واقبل ما يناسبك.</p>
          </div>
          <div className="transpg-service-card">
            <FaStoreAlt className="transpg-icon" />
            <h3>أرباحي</h3>
            <p>راجع أرباحك اليومية وسجل الدفعات.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransporterHome;

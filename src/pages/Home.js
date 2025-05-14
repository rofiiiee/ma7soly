// src/pages/Home.js
import React from "react";
import './Home.css';
import { FaStoreAlt, FaTruck } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating || 0);
  const emptyStars = totalStars - filledStars;
  return (
    <div className="homepg-product-rating">
      {[...Array(filledStars)].map((_, i) => <span key={i} className="homepg-star homepg-filled">★</span>)}
      {[...Array(emptyStars)].map((_, i) => <span key={i} className="homepg-star homepg-empty">☆</span>)}
    </div>
  );
};

function ProductCard({ product }) {
  const navigate = useNavigate();
  if (!product || !product.image || !product.name || !product.category || !product.price) return null;

  return (
    <div
      className="homepg-product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={product.image} alt={product.name} className="homepg-product-image" />
      <div className="homepg-product-info">
        <div className="homepg-product-name-category">
          <h3 className="homepg-product-name">{product.name}</h3>
          <span className="homepg-product-category">{product.category}</span>
        </div>
        <p className="homepg-product-price">{product.price} ج.م/طن</p>
        <RatingStars rating={product.rating} />
      </div>
    </div>
  );
}

const sampleProducts = [
  { id: 1, image: '/images/rice.png', name: 'ارز ابيض', category: 'حبوب', price: '10000', rating: 4.5 },
  { id: 2, image: '/images/onions.png', name: 'بصل احمر', category: 'خضراوات', price: '12000', rating: 4 },
  { id: 3, image: '/images/potatoes.png', name: 'بطاطس', category: 'خضراوات', price: '8000', rating: 3.5 },
  { id: 4, image: '/images/oranges.png', name: 'برتقال', category: 'فاكهة', price: '5000', rating: 3 },
  { id: 5, image: '/images/flax.png', name: 'بذور كتان', category: 'حبوب', price: '10000', rating: 5 },
  { id: 6, image: '/images/watermelon.png', name: 'بطيخ', category: 'فاكهة', price: '7000', rating: 4.5 },
  { id: 7, image: '/images/cotton.png', name: 'قطن', category: 'ألياف', price: '8000', rating: 4 },
  { id: 8, image: '/images/corn.png', name: 'ذرة', category: 'حبوب', price: '9000', rating: 3.8 },
  ,
];

function TrendingProducts() {
  return (
    <section className="homepg-trending-products-section">
      <div className="homepg-products-grid">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function CallToActionSection({ navigate }) {
  return (
    <section className="homepg-cta-section">
      <div className="homepg-cta-overlay"></div>
      <div className="homepg-cta-content">
        <button className="homepg-cta-button" onClick={() => navigate('/products')}>
          عرض المنتجات
        </button>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="homepg-services-section">
      <h2 className="homepg-section-title">الخدمات</h2>
      <div className="homepg-services-grid">
        <div className="homepg-service-card"><FaStoreAlt className="homepg-service-icon"/><h3>اماكن تخزين</h3></div>
        <div className="homepg-service-card"><FaTruck className="homepg-service-icon"/><h3>توصيل</h3></div>
        <div className="homepg-service-card"><BsBoxSeam className="homepg-service-icon"/><h3>جودة المنتج</h3></div>
      </div>
    </section>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homepg-container">
      <main className="homepg-main">
        <div className="homepg-overlay">
          <h1>أهلا بك في <span className="homepg-highlight">محصولي</span></h1>
          <p>يمكنك الآن بيع وشراء المحاصيل الزراعية بسهولة</p>
          <button className="homepg-shop-button" onClick={() => navigate('/products')}>تسوق الآن</button>
          <div className="homepg-store-buttons">
                    <a href="https://www.apple.com/app-store/" target="_blank"><img src="/images/appstore.png" alt="App Store" /></a>
          <a href="https://play.google.com/store" target="_blank"><img src="/images/googleplay.png" alt="Google Play" /></a>
          </div>
        </div>
        <div className="homepg-trending-indicator"><span></span><span>المنتجات الرائجة</span></div>
      </main>
      <TrendingProducts />
      <CallToActionSection navigate={navigate} />
      <ServicesSection />
    </div>
  );
}

export default Home;

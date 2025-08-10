import React, { useState } from "react";
import './QualityInspection.css';
import { useNavigate } from 'react-router-dom';

const crops = [
  { id: 1, image: '/images/wheat.jpg',   category: 'حبوب',  name: 'قمح',    location: 'الفيوم',   testType: 'تحليل رطوبة',      price: 1200 },
  { id: 2, image: '/images/onions.png',  category: 'خضروات', name: 'بصل',    location: 'بني سويف', testType: 'تحليل بصري',       price: 1000 },
  { id: 3, image: '/images/watermelon.png', category: 'فاكهة', name: 'بطيخ', location: 'المنيا',   testType: 'تحليل كيميائي',     price: 1500 },
  { id: 4, image: '/images/rice.png',    category: 'حبوب',  name: 'أرز',    location: 'سوهاج',   testType: 'اختبار سموم فطرية', price: 1400 },
  { id: 5, image: '/images/cotton.png',  category: 'الياف',  name: 'قطن',    location: 'أسيوط',   testType: 'تحليل نسيجي',       price: 2000 },
  { id: 6, image: '/images/corn.png',    category: 'حبوب',  name: 'ذرة',    location: 'الجيزة',  testType: 'تحليل بكتيري',      price: 1300 }
];

function QualityOffers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const cropsPerPage = 4;
  const navigate = useNavigate();

  const indexOfLast   = currentPage * cropsPerPage;
  const currentCrops  = crops.slice(indexOfLast - cropsPerPage, indexOfLast);
  const totalPages    = Math.ceil(crops.length / cropsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1       && setCurrentPage(currentPage - 1);

  const handleAccept = (e) => {
    e.stopPropagation();
    setSuccessMessage('✅ تم قبول فحص المحصول');
    setTimeout(() => setSuccessMessage(''), 2500);
  };

  const handleReject = (e) => {
    e.stopPropagation();
    setSuccessMessage('❌ تم رفض الفحص');
    setTimeout(() => setSuccessMessage(''), 2500);
  };

  return (
    <div className="quality-offers">
      {/* بانر الجودة */}
      <div className="banner-section">
        <img src="/images/quality_banner.png" alt="فحص الجودة" className="banner-image" />
      </div>

      {/* العنوان المطلوب دون أي تأثير على باقي المكوّنات */}
      <h2 style={{ textAlign: 'center', margin: '24px 0', fontWeight: '700' }}>
        العروض المقدمة
      </h2>

      {/* تنبيه القبول / الرفض */}
      {successMessage && (
        <div className="popup-message">{successMessage}</div>
      )}

      {/* بطاقات العروض */}
      <div className="offers-container">
        <div className="products-grid">
          {currentCrops.map(crop => (
            <div
              key={crop.id}
              className="product-card"
              onClick={() => navigate('/QualityInspectionDetails')}
              style={{ cursor: 'pointer' }}
            >
              <img src={crop.image} alt={crop.name} className="product-image" />
              <div className="details">
                <span className="product-category">{crop.category}</span>
                <h3 className="product-name">{crop.name}</h3>

                <div className="shipping-info">
                  <p><span>الموقع:</span> {crop.location}</p>
                  <p><span>نوع الفحص:</span> {crop.testType}</p>
                </div>

                <div className="product-price">{crop.price} ج.م</div>

                <div className="offer-buttons">
                  <button className="accept-btn"  onClick={handleAccept}>قبول</button>
                  <button className="reject-btn"  onClick={handleReject}>رفض</button>
                </div>
              </div>

              <img src="/images/map.png" alt="خريطة" className="map-image" />
              <div className="rating-stars">★★★★☆</div>
            </div>
          ))}
        </div>

        {/* الترقيم */}
        <div className="pagination">
          <button className="page-btn" onClick={prevPage} disabled={currentPage === 1}>❮</button>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              className={`page-btn ${currentPage === idx + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button className="page-btn" onClick={nextPage} disabled={currentPage === totalPages}>❯</button>
        </div>
      </div>
    </div>
  );
}

export default QualityOffers;

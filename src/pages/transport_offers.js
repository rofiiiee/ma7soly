import React, { useState } from "react";
import './transport_offers.css';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, image: '/images/flax.png',        category: 'حبوب',  name: 'بذور كتان', from: 'اسوان', to: 'سوهاج',  amount: '5 طن', price: '10000' },
  { id: 2, image: '/images/watermelon.png',  category: 'فاكهة', name: 'بطيخ',      from: 'اسوان', to: 'اسيوط',  amount: '5 طن', price: '7000'  },
  { id: 3, image: '/images/cotton.png',      category: 'الياف',  name: 'قطن',       from: 'اسوان', to: 'الاقصر', amount: '1 طن', price: '8000'  },
  { id: 4, image: '/images/corn.png',        category: 'حبوب',  name: 'ذرة',       from: 'اسوان', to: 'قنا',    amount: '5 طن', price: '9000'  },
  { id: 5, image: '/images/rice.png',        category: 'حبوب',  name: 'ارز',        from: 'اسوان', to: 'القاهرة',amount: '3 طن', price: '11000' },
  { id: 6, image: '/images/onions.png',      category: 'خضروات', name: 'بصل',       from: 'اسوان', to: 'الجيزة', amount: '2 طن', price: '6000'  }
];

function TransportOffers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const productsPerPage = 4;
  const navigate = useNavigate();

  const indexOfLastProduct  = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts     = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages          = Math.ceil(products.length / productsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage(prev => prev + 1);
  const prevPage = () => currentPage > 1       && setCurrentPage(prev => prev - 1);

  const handleAccept = (e) => {
    e.stopPropagation();
    setSuccessMessage('✅ تم إرسال العرض الخاص بك');
    setTimeout(() => setSuccessMessage(''), 2500);
  };

  const handleReject = (e) => {
    e.stopPropagation();
    setSuccessMessage('❌ تم الرفض');
    setTimeout(() => setSuccessMessage(''), 2500);
  };

  return (
    <div className="transport-offers">

      {/* ===== Banner ===== */}
      <div className="banner-section">
        <img src="images/transporter/shipping-banner.png" alt="طلبات التوصيل" className="banner-image" />
      </div>

      {/* ===== العنوان الجديد ===== */}
      <h2 className="section-heading">طلبات التوصيل</h2>

      {/* ===== رسائل القبول / الرفض ===== */}
      {successMessage && <div className="popup-message">{successMessage}</div>}

      {/* ===== البطاقات ===== */}
      <div className="offers-container">
        <div className="products-grid">
          {currentProducts.map(product => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate('/transporter_requist')}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="details">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>

                <div className="shipping-info">
                  <p><span>من :</span> {product.from}</p>
                  <p><span>الي :</span> {product.to}</p>
                  <p><span>الكمية :</span> {product.amount}</p>
                </div>

                <div className="product-price">{product.price} ج/طن</div>

                <div className="offer-buttons">
                  <button className="accept-btn" onClick={handleAccept}>قبول</button>
                  <button className="reject-btn" onClick={handleReject}>رفض</button>
                </div>
              </div>
              <img src="/images/map.png" alt="خريطة" className="map-image" />
              <div className="rating-stars">★★★★☆</div>
            </div>
          ))}
        </div>

        {/* ===== ترقيم الصفحات ===== */}
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

export default TransportOffers;

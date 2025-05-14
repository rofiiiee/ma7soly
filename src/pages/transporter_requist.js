import React, { useState } from "react";
import './transporter_requist.css';
import { useNavigate } from 'react-router-dom';

function ShippingDetails() {
  const [price, setPrice] = useState(2500); // السعر
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAccept = () => {
    setMessage('✅ تم إرسال العرض الخاص بك');
    setTimeout(() => {
      setMessage('');
      navigate('/driver_orders'); // ✅ يروح لصفحة الطلبات المقبولة
    }, 2000);
  };

  const handleReject = () => {
    setMessage('❌ تم الرفض');
    setTimeout(() => {
      setMessage('');
      navigate('/transport_offers'); // ✅ يرجع لصفحة العروض
    }, 2000);
  };

  return (
    <div className="shipping-page">

      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <img src="images/transporter/shipping-banner.png" alt="الشحن" className="banner-image" />
      </div>

      {/* ✅ رسالة مؤقتة */}
      {message && (
        <div className="popup-message">
          {message}
        </div>
      )}

      {/* ===== Main Container ===== */}
      <div className="details-container">
        
        {/* ===== Map Section ===== */}
        <div className="map-section">
          <img src="/images/map.png" alt="خريطة" className="map-image" />
        </div>

        {/* ===== Info Section ===== */}
        <div className="info-section">
          <div className="info-row">
            <span className="info-label">من :</span>
            <div className="info-value">اسوان - اسوان شارع السادات</div>
          </div>

          <div className="info-row">
            <span className="info-label">الي :</span>
            <div className="info-value">سوهاج - سوهاج</div>
          </div>

          <div className="info-row">
            <span className="info-label">الكمية :</span>
            <div className="info-value">5 طن</div>
          </div>

          <div className="info-row">
            <span className="info-label">رقم الهاتف :</span>
            <div className="info-value">010123456789</div>
          </div>

          {/* ===== Product Section ===== */}
          <div className="product-section">
            <img src="/images/flax.png" alt="بذور كتان" className="product-image" />
            <h3 className="product-name">بذور كتان</h3>
          </div>

          {/* ===== Editable Price Section ===== */}
          <div className="price-section">
            <span>الحساب الكلي :</span>
            <input
              type="number"
              className="price-input"
              value={price}
              onChange={handlePriceChange}
            /> ج.م
          </div>

          {/* ===== Action Buttons ===== */}
          <div className="buttons-section">
            <button className="accept-button" onClick={handleAccept}>قبول</button>
            <button className="reject-button" onClick={handleReject}>رفض</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;

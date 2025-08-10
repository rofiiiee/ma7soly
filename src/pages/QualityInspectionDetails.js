import React, { useState } from "react";
import './QualityInspectionDetails.css';
import { useNavigate } from 'react-router-dom';

function QualityInspectionDetails() {
  const [price, setPrice] = useState(150); // السعر المقترح لفحص الجودة
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAccept = () => {
    setMessage('✅ تم تأكيد فحص الجودة لهذا المحصول');
    setTimeout(() => {
      setMessage('');
      navigate('/quality_reports'); // ✅ الانتقال لتقارير الجودة
    }, 2000);
  };

  const handleReject = () => {
    setMessage('❌ تم رفض الفحص');
    setTimeout(() => {
      setMessage('');
      navigate('/QualityInspection'); // ✅ العودة لصفحة الفحوصات
    }, 2000);
  };

  return (
    <div className="quality-page">

      {/* ===== Banner Section ===== */}
      <div className="banner-section">
        <img src="/images/quality_banner.png" alt="فحص الجودة" className="banner-image" />
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
            <span className="info-label">اسم المحصول :</span>
            <div className="info-value">بطاطس</div>
          </div>

          <div className="info-row">
            <span className="info-label">الموقع :</span>
            <div className="info-value">المنيا - مصر</div>
          </div>

          <div className="info-row">
            <span className="info-label">نوع الفحص :</span>
            <div className="info-value">تحليل كيميائي</div>
          </div>

          {/* ===== Product Section ===== */}
          <div className="product-section">
            <img src="/images/potatoes.png" alt="بطاطس " className="product-image" />
            <h3 className="product-name">بطاطس</h3>
          </div>

          {/* ===== Editable Price Section ===== */}
          <div className="price-section">
            <span>السعر المقترح للفحص :</span>
            <input
              type="number"
              className="price-input"
              value={price}
              onChange={handlePriceChange}
            /> ج.م
          </div>

          {/* ===== Action Buttons ===== */}
          <div className="buttons-section">
            <button className="accept-button" onClick={handleAccept}>تأكيد الفحص</button>
            <button className="reject-button" onClick={handleReject}>رفض الفحص</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityInspectionDetails;

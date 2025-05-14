import React, { useState } from "react";
import "./DriverSuggestion.css";

const DriverSuggestion = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReject, setShowReject] = useState(false);

  const handleAccept = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      window.location.href = "/qualitycheck"; // 👈 هنا الانتقال بعد الرسالة
    }, 2500);
  };

  const handleReject = () => {
    setShowReject(true);
    setTimeout(() => setShowReject(false), 2500);
  };

  return (
    <div className="suggestion-wrapper">
      {/* ✅ بانر الشحن */}
      <div className="banner">
        <img src="/images/shipping_banner_bg.png" alt="الشحن" />
      </div>

      {/* ✅ كارت السائق */}
      <div className="driver-box">
        <div className="driver-image-section">
          <img src="/images/driver.png" alt="السائق" />
          <div className="driver-name">احمد علي</div>
          <div className="driver-city">
            <i className="fas fa-map-marker-alt"></i> الأقصر
          </div>
        </div>

        <div className="truck-section">
          <img src="/images/cars/truck_icon.png" alt="الشاحنة" />
          <div className="driver-time">الوصول التقريبي:<br /> خلال ٤ أيام</div>
        </div>

        <div className="price-box">2500</div>

        <div className="action-buttons">
          <button className="accept" onClick={handleAccept}>قبول</button>
          <button className="reject" onClick={handleReject}>رفض</button>
        </div>
      </div>

      {/* ✅ رسائل النجاح أو الرفض */}
      {showSuccess && (
        <div className="popup-message success">✅ تم الحجز بنجاح</div>
      )}
      {showReject && (
        <div className="popup-message reject">❌ تم رفض العرض</div>
      )}
    </div>
  );
};

export default DriverSuggestion;

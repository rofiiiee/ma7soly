// src/pages/ShippingPage/ShippingPage.js
import React from 'react';
import { FaMapMarkerAlt, FaEdit } from 'react-icons/fa'; // أو أي أيقونات أخرى مناسبة
import './Shipping.css';

function ShippingPage() {
  // بيانات افتراضية (يجب جلبها من state أو props)
  const currentLocation = "اسوان - اسوان شارع السادات";
  const destination = "سوهاج - سوهاج";
  const estimatedPrice = 2000;
  // مسار صورة الخريطة (استخدم صورة ثابتة كمثال أو مكتبة خرائط حقيقية)
  const mapImageUrl = "/images/maps/sample-map.png"; // <<<--- !! استبدل بالمسار الصحيح أو مكتبة الخرائط !!

  return (
    <div className="shipping-page">
      {/* --- Banner Section --- */}
      <div className="shipping-banner">
        <img
          src="/images/shipping_banner_bg.png" // <<<--- !! استبدل بمسار صورة البانر !!
          alt="الشحن"
          className="banner-bg"
        />
     
      </div>

      {/* --- Main Content Area --- */}
      <div className="shipping-content-wrapper">
        {/* --- Map Preview Section (Right on Desktop) --- */}
        <div className="map-preview-section">
        <img src="/images/map.png" alt="خريطة الموقع" className="map-image" />
          <div className="map-overlay">
             <button className="edit-location-btn">
                <FaEdit className="edit-icon"/>
                <span>تحديد الموقع</span>
             </button>
          </div>
        </div>

        {/* --- Shipping Details Section (Left on Desktop) --- */}
        <div className="shipping-details-section">
          <div className="location-display">
            <label htmlFor="current-location">موقعك الحالي :</label>
            <div id="current-location" className="location-box">
              {/* <FaMapMarkerAlt className="location-icon" />  Optional Icon */}
              <span>{currentLocation}</span>
            </div>
          </div>

          <div className="location-display">
            <label htmlFor="destination-location">الموقع الذي تريد توصيل شحنتك اليه :</label>
            <div id="destination-location" className="location-box">
              {/* <FaMapMarkerAlt className="location-icon" /> Optional Icon */}
              <span>{destination}</span>
            </div>
          </div>

          <div className="price-display">
            <span className="price-label">السعر المتوقع :</span>
            <span className="price-value">
                {estimatedPrice.toLocaleString()} ج.م
            </span>
          </div>

          <button className="find-driver-button">البحث عن سائق</button>
        </div>
      </div>
      {/* Decorative leaf added via CSS */}
    </div>
  );
}

export default ShippingPage;
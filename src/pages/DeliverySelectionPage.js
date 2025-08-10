import React, { useState } from "react";
import "./DeliverySelectionPage.css";
import { useNavigate } from "react-router-dom";

const DeliverySelectionPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/DriverOffers");
    }, 2000); // بعد ثانيتين
  };

  return (
    <div className="delivery-wrapper">
      <div className="banner-card">
        <img
          src="/images/shipping_banner_bg.png"
          alt="الشحن"
          className="banner-image-contained"
        />
      </div>

      <div className="delivery-options-page">
        <div className="map-container">
          <img src="/images/map_with_path.png" alt="map" className="map-image" />
        </div>

        <div className="form-fields">
          <label>موقفك الحالي:
            <input type="text" defaultValue="أسوان - أسوان شارع السادات" />
          </label>
          <label>الموقع الذي تريد توصيل شحنتك إليه:
            <input type="text" defaultValue="سوهاج - سوهاج" />
          </label>
        </div>

        <p className="price-text">
          السعر المتوقع: <strong>2000 ج.م</strong>
        </p>

        <button className="search-driver-btn" onClick={handleSearch}>
          {loading ? "جارٍ البحث..." : "البحث عن سائق"}
        </button>
      </div>
    </div>
  );
};

export default DeliverySelectionPage;

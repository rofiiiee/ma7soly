// File: src/pages/DriverOffers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./DriverOffers.css";

const offers = [
  { id: 1, city: "أسيوط", price: 3000, time: "يصل خلال 3 أيام", truck: "/images/truck-red.png" },
  { id: 2, city: "سوهاج", price: 2500, time: "يصل خلال 5 أيام", truck: "/images/truck-white.png", selected: true },
  { id: 3, city: "المنيا", price: 4000, time: "يصل خلال يومان", truck: "/images/truck-grey.png" },
  { id: 4, city: "أسيوط", price: 3000, time: "يصل خلال 3 أيام", truck: "/images/truck-red.png" },
];

const DriverOffers = () => {
  const navigate = useNavigate();

  const handleOfferClick = (id) => {
    navigate("/driver-suggestion");
  };

  return (
    <div className="offers-page">
      {/* ✅ بانر الشحن */}
      <div className="banner-card">
        <img
          src="/images/shipping_banner_bg.png"
          alt="الشحن"
          className="banner-image-contained"
        />
      </div>

      {/* ✅ قائمة العروض */}
      <div className="offers-wrapper">
        {offers.map(offer => (
          <div
            key={offer.id}
            className={`offer-item ${offer.selected ? "selected" : ""}`}
            onClick={() => handleOfferClick(offer.id)}
            style={{ cursor: "pointer" }} // علشان تبان أنها قابلة للضغط
          >
            <img src={offer.truck} alt="truck" className="truck-icon" />
            <div className="offer-info">
              <div className="city">{offer.city}</div>
              <div className="time">{offer.time}</div>
            </div>
            <div className="price">{offer.price} جنيه</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverOffers;

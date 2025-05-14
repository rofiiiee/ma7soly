import React from "react";
import "./Loading.css";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="top-image">
        <img src="/images/shipping_banner_bg.png" alt="الشحن" />
      </div>

      <div className="logo-container">
      <img src="/images/logo.png" alt="محصولي" className="pnglogo" />
      </div>

      <p className="loading-text">البحث عن سائق...</p>

      <div className="dots">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  );
};

export default LoadingPage;

import React from "react";
import './driver_profile.css';

function DriverProfile() {
  const driver = {
    name: "أحمد علي",
    phone: "01012345678",
    vehicle: "نقل ثقيل",
    city: "أسوان",
    image: "/images/driver.png"
  };

  return (
    <div className="profile-page">
      {/* ✅ Banner */}
      <div className="banner-section">
        <img src="images/transporter/shipping-banner.png" alt="Profile Banner" className="banner-image" />
      </div>

      {/* ✅ Content */}
      <div className="profile-card">
        <img src={driver.image} alt="Driver" className="profile-image" />

        <h2 className="driver-name">{driver.name}</h2>

        <div className="driver-info">
          <p><strong>رقم الهاتف:</strong> {driver.phone}</p>
          <p><strong>نوع المركبة:</strong> {driver.vehicle}</p>
          <p><strong>المدينة:</strong> {driver.city}</p>
        </div>

        <button className="edit-button">تعديل الملف الشخصي</button>
      </div>
    </div>
  );
}

export default DriverProfile;

import React from 'react';
import './DriverServices.css';
import { FaShippingFast, FaPlusSquare, FaHistory, FaHeadset } from 'react-icons/fa';

const DriverServices = () => {
  return (
    <div className="driver-services">
      <h2 className="title">خدمات السائق</h2>
      <p className="subtitle">اختر الخدمة التي تريد استخدامها الآن</p>

      <div className="services-grid">
        <div className="service-card">
          <FaShippingFast className="service-icon" />
          <h3>شحناتي الحالية</h3>
          <p>تابع حالة الطلبات التي تعمل عليها الآن.</p>
        </div>

        <div className="service-card">
          <FaPlusSquare className="service-icon" />
          <h3>شحنات جديدة</h3>
          <p>استعرض الطلبات المتاحة واقبل منها ما يناسبك.</p>
        </div>

        <div className="service-card">
          <FaHistory className="service-icon" />
          <h3>سجل الشحنات</h3>
          <p>راجع كل الشحنات المكتملة والسجلات السابقة.</p>
        </div>

        <div className="service-card">
          <FaHeadset className="service-icon" />
          <h3>الدعم الفني</h3>
          <p>تواصل مع فريق الدعم في حالة وجود مشكلة.</p>
        </div>
      </div>
    </div>
  );
};

export default DriverServices;

// src/pages/Services.js
import React from 'react';
import './Services.css';

const services = [
  {
    title: "توصيل المنتجات",
    description: "ربط المزارعين بشركات شحن موثوقة بأسعار مناسبة.",
    icon: "🚚"
  },
  {
    title: "فحص جودة المحاصيل",
    description: "خدمة فحص جودة من مفتشين معتمدين قبل البيع.",
    icon: "🧪"
  },
  {
    title: "تخزين آمن",
    description: "إمكانية تخزين المحصول في مخازن قريبة وموثقة.",
    icon: "📦"
  },
  {
    title: "حساب تكلفة الزراعة",
    description: "أداة لحساب تكلفة المحصول وربحك المتوقع تلقائيًا.",
    icon: "🧮"
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <h2 className="services-title">خدمات محصولي</h2>
      <p className="services-subtitle">نقدّم لك حلولًا متكاملة لدعم كل خطوة في رحلتك الزراعية</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-button">اطلب الخدمة</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

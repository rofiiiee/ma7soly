import React, { useState } from 'react';
import './Onboarding.css';
import { useNavigate } from 'react-router-dom';

const screens = [
  {
    title: 'مرحبًا بك في محصولي!',
    description: 'نساعدك كمزارع في عرض وبيع محاصيلك بسهولة وأمان.',
    image: '/images/qualityhero.png'
  },
  {
    title: 'كن تاجرًا ذكيًا',
    description: 'اطلب المنتجات بأسعار منافسة من مزارعين موثوقين.',
    image: '/images/onboarding-merchant.jpg'
  },
  {
    title: 'فحص جودة احترافي',
    description: 'انضم لفريق فاحصي الجودة وتابع نتائج الفحص والتقارير.',
    image: '/images/onboarding-inspector.jpg'
  },
  {
    title: 'سهولة النقل والتوصيل',
    description: 'كسائق، تابع الطلبات وسجّل عروضك مباشرة.',
    image: '/images/onboarding-driver.jpg'
  }
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (current < screens.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      navigate('/');
    }
  };

  const skip = () => navigate('/');

  return (
    <div
      className="onboarding-screen"
      style={{ backgroundImage: `url(${screens[current].image})` }}
    >
      <div className="onboarding-content">
        <h2>{screens[current].title}</h2>
        <p>{screens[current].description}</p>

        <div className="onboarding-buttons">
          <button className="onboarding-btn skip" onClick={skip}>تخطي</button>
          <button className="onboarding-btn next" onClick={next}>التالي</button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

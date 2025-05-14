// File: src/pages/Payment.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate();

  const handleSelect = (method) => {
    setSelectedMethod(method);

    if (method === 'visa') {
      navigate('/visapayment'); // إلى صفحة الفيزا
    } else if (method === 'instapay') {
      navigate('/instapaypayment'); // إلى صفحة انستا باي
    } else if (method === 'cash') {
      navigate('/vodafonecashpayment'); // إلى صفحة فودافون كاش
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-banner">
        <img src="/images/banner.png" alt="banner" className="banner-img" />
      </div>

      <div className="payment-box">
        {/* Instapay */}
        <img
          src="/images/instapay.png"
          alt="instapay"
          className={`payment-method ${selectedMethod === 'instapay' ? 'selected' : ''}`}
          onClick={() => handleSelect('instapay')}
        />

        {/* Vodafone Cash */}
        <img
          src="/images/cash.png"
          alt="vodafone cash"
          className={`payment-method ${selectedMethod === 'cash' ? 'selected' : ''}`}
          onClick={() => handleSelect('cash')}
        />

        {/* Visa */}
        <img
          src="/images/visa.png"
          alt="visa"
          className={`payment-method ${selectedMethod === 'visa' ? 'selected' : ''}`}
          onClick={() => handleSelect('visa')}
        />
      </div>
    </div>
  );
};

export default Payment;

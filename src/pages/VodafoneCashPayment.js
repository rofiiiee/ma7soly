// File: src/pages/VodafoneCashPayment.jsx
import React, { useState, useEffect } from 'react';
import './VisaPayment.css'; // نستخدم نفس الستايل لتوحيد الشكل

const VodafoneCashPayment = () => {
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedAmount = localStorage.getItem('totalAmount');
    if (storedAmount) {
      setAmount(parseFloat(storedAmount));
    }
  }, []);

  return (
    <div className="visa-container">
      <div className="visa-box">

        {/* إدخال رقم الموبايل */}
        <div className="visa-row">
          <label className="visa-label">رقم الموبايل</label>
          <input
            type="text"
            placeholder="01xxxxxxxxx"
            className="visa-input"
          />
        </div>

        {/* إدخال الرقم السري */}
        <div className="visa-row">
          <label className="visa-label">الرقم السري</label>
          <input
            type="password"
            placeholder="****"
            className="visa-input"
          />
        </div>

        {/* ملخص المبلغ */}
        <div className="visa-summary">
          <button className="details-btn">التفاصيل</button>
          <p className="amount">إجمالي المبلغ: <strong>{amount.toLocaleString()} ج.م</strong></p>
        </div>

        {/* زر الدفع */}
        <button
          className="confirm-btn"
          onClick={() => setShowModal(true)}
        >
          تأكيد الدفع
        </button>
      </div>

      {/* مودال النجاح */}
      {showModal && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="success-circle">
              <img src="/images/check-icon.png" alt="success" className="success-icon" />
            </div>
            <p className="success-text">تم الدفع بنجاح</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VodafoneCashPayment;

// File: src/pages/VisaPayment.jsx
import React, { useState, useEffect } from 'react';
import './VisaPayment.css';

const VisaPayment = () => {
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false); // 💡 الحالة الخاصة بالمودال

  useEffect(() => {
    const storedAmount = localStorage.getItem('totalAmount');
    if (storedAmount) {
      setAmount(parseFloat(storedAmount));
    }
  }, []);

  return (
    <div className="visa-container">
      <div className="visa-box">

        {/* إدخال رقم البطاقة */}
        <div className="visa-row">
          <label className="visa-label">رقم بطاقة الفيزا</label>
          <div className="visa-card-box">
            <img src="/images/visa.png" alt="visa" className="visa-icon" />
            <input
              type="text"
              placeholder="xxxx xxxx xxxx xxxx"
              className="visa-card-input"
            />
          </div>
        </div>

        {/* إدخال الرقم السري */}
        <div className="visa-row">
          <label className="visa-label">الرقم السري (PIN)</label>
          <input
            type="password"
            placeholder="PIN ****"
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
          onClick={() => setShowModal(true)} // ✅ اظهار المودال بدل التنقل
        >
          تأكيد الدفع
        </button>
      </div>

      {/* ✅ المودال يظهر فوق الصفحة */}
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

export default VisaPayment;

// File: src/pages/InstapayPayment.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅
import './VisaPayment.css';

const InstapayPayment = () => {
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // ✅

  useEffect(() => {
    const storedAmount = localStorage.getItem('totalAmount');
    if (storedAmount) {
      setAmount(parseFloat(storedAmount));
    }
  }, []);

  // ✅ عند إتمام الدفع
  const handlePayment = () => {
    setShowModal(true);

    // بعد 2 ثانية، يروح لصفحة DeliverySelectionPage
    setTimeout(() => {
      navigate('/delivery-selection');
    }, 2000);
  };

  return (
    <div className="visa-container">
      <div className="visa-box">

        {/* إدخال Instapay Address */}
        <div className="visa-row">
          <label className="visa-label">رقم الهاتف أو عنوان Instapay</label>
          <input
            type="text"
            placeholder="example@instapay"
            className="visa-input"
          />
        </div>

        {/* إدخال IPN PIN */}
        <div className="visa-row">
          <label className="visa-label">IPN PIN</label>
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

        {/* زر تأكيد الدفع */}
        <button
          className="confirm-btn"
          onClick={handlePayment}
        >
          تأكيد الدفع
        </button>
      </div>

      {/* مودال الدفع الناجح */}
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

export default InstapayPayment;

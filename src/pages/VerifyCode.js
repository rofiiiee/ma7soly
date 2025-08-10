// File: src/pages/VerifyCode.jsx
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // ✅

const VerifyCode = () => {
  const navigate = useNavigate(); // ✅

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-box">
          <img src="/images/leaf.png" alt="leaf" className="leaf-img" />
          <img
            src="/images/reset.png"
            alt="reset-icon"
            style={{ width: '200px', margin: '0 auto 1rem', display: 'block' }}
          />
          <h2 className="welcome">ارسال رمز التحقق</h2>
          <p style={{ textAlign: 'center', color: '#222', fontSize: '15px', marginBottom: '1.5rem' }}>
            ادخل الرمز المكون من اربع ارقام الذي تم<br />ارساله اليك
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            {[1, 2, 3, 4].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  border: '2px solid #4caf50',
                  textAlign: 'center',
                  fontSize: '20px',
                  outline: 'none'
                }}
              />
            ))}
          </div>

          {/* ✅ زر التحقق من الرمز */}
          <div style={{ width: '60%', margin: '0 auto' }}>
            <button
              className="login-btn"
              style={{ fontSize: '14px', padding: '12px' }}
              onClick={() => navigate('/reset-password')} // ✅ التوجيه
            >
              التحقق من الرمز
            </button>
          </div>
        </div>
      </div>

      <div className="login-image">
        <img src="/images/wheat4.jpg" alt="wheat" className="bg-image" />
      </div>
    </div>
  );
};

export default VerifyCode;

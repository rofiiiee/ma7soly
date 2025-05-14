// File: src/pages/ForgotPassword.jsx
import React from 'react';
import './Login.css';

const ForgetPassword = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-box">
          <img src="/images/leaf.png" alt="leaf" className="leaf-img" />
          <img src="/images/reset.png" alt="reset-icon" style={{ width: '200px', margin: '0 auto 1rem', display: 'block' }} />
          <h2 className="welcome">نسيت كلمة السر</h2>
          <p style={{ textAlign: 'center', color: '#222', fontSize: '15px', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            أدخل عنوان البريد الإلكتروني الذي استخدمته<br />عند الانضمام وسنرسل لك تعليمات لإعادة<br />تعيين كلمة المرور الخاصة بك.
          </p>
          <label className="label" htmlFor="email" style={{ textAlign: 'center', display: 'block' }}>البريد الالكتروني</label>
          <div className="password-box" style={{ width: '75%', margin: '0 auto 0.5rem' }}>
            <input
              type="text"
              id="email"
              className="input input-error"
              style={{ fontSize: '13px', padding: '14px 10px', height: '20px' }}
              placeholder="البريد الالكتروني أو رقم الهاتف"
            />
            <span className="eye-icon"></span>
          </div>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <button className="login-btn" style={{ fontSize: '13px', padding: '12px' }}>ارسل الرابط</button>
          </div>
          <p className="no-account">هل تواجه مشكلة ؟ <a href="#" className="new-account">ارسل مرة اخرى</a></p>
        </div>
      </div>
      <div className="login-image">
        <img src="/images/wheat4.jpg" alt="wheat" className="bg-image" />
      </div>
    </div>
  );
};

export default ForgetPassword;

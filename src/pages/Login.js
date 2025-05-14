// File: src/pages/Login.jsx
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-box">
          <img src="/images/leaf.png" alt="leaf" className="leaf-img" />
          <h2 className="welcome">أهلاً بك في محصولي</h2>

          <label className="label" htmlFor="email">البريد الالكتروني</label>
          <input
            type="text"
            id="email"
            className="input email"
            placeholder="البريد الالكتروني أو رقم الهاتف"
          />

          <label className="label" htmlFor="password">كلمة السر</label>
          <div className="password-box">
            <input
              type="password"
              id="password"
              className="input"
              placeholder="كلمة السر"
            />
          </div>

          {/* ✅ رابط نسيت كلمة السر */}
          <span
            className="forgot-password"
            onClick={() => navigate('/VerifyCode')}
            style={{ cursor: 'pointer', color: '#2e7d32', fontWeight: 'bold' }}
          >
            نسيت كلمة السر؟
          </span>

          <button className="login-btn">تسجيل الدخول</button>

          <p className="no-account">
            ليس لديك حساب؟{' '}
            <span
              className="new-account"
              onClick={() => navigate('/signup')}
              style={{ cursor: 'pointer', color: '#2e7d32', fontWeight: 'bold' }}
            >
              إنشاء حساب جديد
            </span>
          </p>
        </div>
      </div>

      <div className="login-image">
        <img src="/images/wheat4.jpg" alt="wheat" className="bg-image" />
      </div>
    </div>
  );
};

export default Login;

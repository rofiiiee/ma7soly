// File: src/pages/NewPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const ResetPassword = () => {
  const navigate = useNavigate();

  // قيم مدخَلات كلمة السر
  const [newPassword, setNewPassword]         = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // للتحكم فى إظهار/إخفاء المودال
  const [showModal, setShowModal] = useState(false);

  /*-------------------------------------------------
   | 1) الـ Handler اللى بيتنفّذ لما المستخدم يضغط
   |    على «إنشاء كلمة سر جديدة»
   *------------------------------------------------*/
  const handleCreatePassword = () => {
    //Validation بسيط
    if (!newPassword || !confirmPassword) {
      alert('من فضلك اكتب كلمة السر فى الحقلين');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('كلمتا السر غير متطابقتين');
      return;
    }

    // ✅ هنا تقدر تبعت الـ API بتاع تغيير الباسورد لو متوفر

    // إظهار مودال التهنئة
    setShowModal(true);
  };

  /*-------------------------------------------------
   | 2) لما المستخدم يضغط على زر «العودة لتسجيل الدخول»
   |    داخل المودال
   *------------------------------------------------*/
  const handleModalClose = () => {
    setShowModal(false);
    navigate('/login');      // رجوع لصفحة اللوج-إن
  };

  return (
    <>
      {/* ---------- شاشة تغيير كلمة السر ---------- */}
      <div className="login-container">
        <div className="login-form">
          <div className="login-box">
            <img src="/images/leaf.png"  alt="leaf"  className="leaf-img" />
            <img src="/images/reset.png" alt="reset-icon"
                 style={{ width: '90px', margin: '0 auto 1rem', display: 'block' }} />

            <h2 className="welcome">كلمة السر الجديدة</h2>

            {/* كلمة السر الجديدة */}
            <label className="label" htmlFor="new-password">ادخل كلمة السر الجديدة</label>
            <div className="password-box" style={boxStyle}>
              <img src="/images/lock.png" alt="lock" style={iconStyle} />
              <input
                type="password"
                id="new-password"
                className="input"
                placeholder="●●●●●●●"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* تأكيد كلمة السر */}
            <label className="label" htmlFor="confirm-password">تأكيد كلمة السر الجديدة</label>
            <div className="password-box" style={{ ...boxStyle, marginBottom: '1.5rem' }}>
              <img src="/images/lock.png" alt="lock" style={iconStyle} />
              <input
                type="password"
                id="confirm-password"
                className="input"
                placeholder="●●●●●●●"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* زر الإنشاء */}
            <div style={{ width: '60%', margin: '0 auto' }}>
              <button className="login-btn"
                      style={{ fontSize: '14px', padding: '12px' }}
                      onClick={handleCreatePassword}>
                انشاء كلمة سر جديدة
              </button>
            </div>
          </div>
        </div>

        <div className="login-image">
          <img src="/images/wheat4.jpg" alt="wheat" className="bg-image" />
        </div>
      </div>

      {/* ---------- مودال التهنئة ---------- */}
      {showModal && (
        <div className="modal-overlay" style={overlayStyle}>
          <div className="modal-box" style={modalStyle}>
            <div style={circleStyle}>
              <img src="/images/check-icon.png" alt="success" style={{ width: '40px' }} />
            </div>

            <h2 className="welcome" style={{ margin: '1rem 0 0.5rem' }}>تهانينا!</h2>
            <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              تم تغيير كلمة المرور بنجاح، يمكنك الآن تسجيل الدخول.
            </p>

            <button className="login-btn" onClick={handleModalClose}>
              العودة لتسجيل الدخول
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/* ---------- Styles (inline لتسهيل الدمج السريع) ---------- */
const boxStyle = {
  width: '75%',
  margin: '0 auto 1rem',
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #f25c5c',
  borderRadius: '10px',
  padding: '0 10px',
  height: '45px',
};
const iconStyle  = { width: '40px', marginLeft: '10px' };
const inputStyle = {
  flex: 1,
  border: 'none',
  outline: 'none',
  height: '100%',
  fontSize: '15px',
  padding: '0 10px',
  background: 'transparent',
};

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0,0,0,0.35)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalStyle = {
  background: '#fff',
  borderRadius: '15px',
  padding: '40px 30px',
  maxWidth: '350px',
  width: '90%',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
};

const circleStyle = {
  width: '110px',
  height: '110px',
  borderRadius: '50%',
  background: '#39b354',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
};

export default ResetPassword;

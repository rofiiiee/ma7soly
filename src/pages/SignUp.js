import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../components/SuccessModal';

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleAccountCreation = () => {
    if (!userType) {
      alert('من فضلك اختر نوع المستخدم');
      return;
    }

    // 🧠 تحويل الاسم العربي لقيمة role مفهومة للهيدر
    let mappedRole = '';
    switch (userType) {
      case 'تاجر':
        mappedRole = 'merchant';
        break;
      case 'مزارع':
        mappedRole = 'farmer';
        break;
      case 'شركة شحن':
        mappedRole = 'driver';
        break;
      case 'مفتش جودة':
        mappedRole = 'quality';
        break;
      default:
        mappedRole = 'merchant';
    }

    // ✅ حفظ الدور في localStorage
    localStorage.setItem('userRole', mappedRole);

    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // إعادة توجيه بناءً على نوع المستخدم العربي
    if (userType === 'تاجر') {
      navigate('/home');
    } else if (userType === 'مزارع') {
      navigate('/farmer');
    } else if (userType === 'شركة شحن') {
      navigate('/transporter');
    } else if (userType === 'مفتش جودة') {
      navigate('/QualityHome');
    } else {
      navigate('/home');
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="login-box">
            <img src="/images/leaf.png" alt="leaf" className="leaf-img" />
            <h2 className="welcome">أهلاً بك في محصولي</h2>

            <label className="label">الاسم كامل</label>
            <input className="input input-error" type="text" placeholder="الاسم كامل" />

            <label className="label">البريد الإلكتروني</label>
            <input className="input input-error" type="email" placeholder="البريد الإلكتروني" />

            <label className="label">رقم الهاتف</label>
            <input className="input input-error" type="text" placeholder="رقم الهاتف" />

            <label className="label">كلمة السر</label>
            <div className="password-box">
              <input className="input input-error" type="password" placeholder="كلمة السر" />
            </div>

            <label className="label">هل أنت ؟</label>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              marginBottom: '1.5rem', flexWrap: 'wrap', gap: '8px'
            }}>
              {['مزارع', 'تاجر', 'شركة شحن', 'مفتش جودة'].map(type => (
                <label key={type}>
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    onChange={e => setUserType(e.target.value)}
                  /> {type}
                </label>
              ))}
            </div>

            <button className="login-btn" onClick={handleAccountCreation}>
              إنشاء حساب
            </button>

            <p className="no-account">
              لديك حساب بالفعل ؟{' '}
              <span
                className="new-account"
                onClick={() => navigate('/login')}
                style={{ cursor: 'pointer', color: '#2e7d32', fontWeight: 'bold' }}
              >
                تسجيل الدخول
              </span>
            </p>
          </div>
        </div>

        <div className="login-image">
          <img src="/images/wheat4.jpg" alt="wheat" className="bg-image" />
        </div>
      </div>

      {/* ✅ Success Modal + Redirect */}
      {showModal && <SuccessModal onClose={handleModalClose} userType={userType} />}
    </>
  );
};

export default SignUp;
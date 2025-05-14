import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ onClose, userType }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    onClose(); // إغلاق المودال أولاً

    // ✅ توجيه حسب نوع المستخدم
    switch (userType) {
      case 'تاجر':
        navigate('/home');
        break;
      case 'مزارع':
        navigate('/farmer');
        break;
      case 'شركة شحن':
        navigate('/transporter');
        break;
      case 'مفتش جودة':
        navigate('/QualityHome');
        break;
      default:
        navigate('/home'); // افتراضي
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        width: '350px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#4caf50',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <img src="/images/check-icon.png" alt="check" style={{ width: '40px' }} />
        </div>
        <h2 style={{ fontWeight: '700' }}>تهانينا!</h2>
        <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.7' }}>
          تم تفعيل حسابك بنجاح، يمكنك الآن الانتقال إلى<br />الصفحة الرئيسية.
        </p>
        <button
          onClick={handleRedirect}
          style={{
            marginTop: '1.5rem',
            backgroundColor: '#4caf50',
            border: 'none',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          العودة للرئيسية
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;

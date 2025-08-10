// farmer.js
import React, { useState, useEffect } from 'react';
import {
  FaUser, FaGift, FaPlus, FaShieldAlt, FaQuestionCircle,
  FaStar, FaChevronLeft, FaClipboardList,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './farmer.css';

import OrdersTable   from './OrdersTable';
import ProfilePage   from './ProfilePage';
import PrivacyPolicy from './PrivacyPolicy';
import RateUs        from './RateUs';
import HelpCenter    from './HelpCenter';

function Farmer() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('account');

  /* فعِّل تبويب "الطلبات" لو جاي من /farmer/orders */
 useEffect(() => {
  if (location.pathname.endsWith('/orders')) setActiveItem('orders');
  if (location.pathname.endsWith('/add'))    setActiveItem('add');   // ← لازم السطر ده
}, [location.pathname]);


  /* ---------------- بيانات النماذج ---------------- */
  const [formData, setFormData] = useState({
    name: '', type: '', price: '', description: '', image: null,
  });
  const [previewImage, setPreviewImage]     = useState(null);
  const [errorMessage, setErrorMessage]     = useState('');
  const [showConfirm, setShowConfirm]       = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  /* ---------------- Handlers ---------------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handlePublishClick = () => {
    if (!formData.name || !formData.type || !formData.price || !formData.image) {
      setErrorMessage('من فضلك أكمل جميع الحقول.');
      return;
    }
    setErrorMessage('');
    setShowConfirm(true);
  };

  const confirmPublish = () => {
    // هنا يستدعى API حقيقي لو موجود
    setShowConfirm(false);
    setSuccessMessage('تم نشر المنتج بنجاح!');
    setFormData({ name: '', type: '', price: '', description: '', image: null });
    setPreviewImage(null);
  };

  /* ---------------- القائمة الجانبية ---------------- */
  const menuItems = [
    { id: 'account', text: 'حسابي',              icon: <FaUser /> },
 
    { id: 'add',     text: 'إضافة منتج',         icon: <FaPlus /> },
    { id: 'orders',  text: 'الطلبات المستلمة',   icon: <FaClipboardList /> },
    { id: 'privacy', text: 'سياسة الخصوصية',     icon: <FaShieldAlt /> },
    { id: 'help',    text: 'مركز المساعدة',      icon: <FaQuestionCircle /> },
    { id: 'rate',    text: 'قيّمنا',             icon: <FaStar /> },
  ];

  /* ---------------- محتوى التبويبات ---------------- */
  const renderContent = () => {
    switch (activeItem) {
      case 'account':
        return <ProfilePage />;

      case 'offers':
        return <p className="placeholder">هنا ستظهر عروضك المنشورة.</p>;

      case 'add':
        return (
          <div className="add-product-form">
            <h2>إضافة محصول جديد</h2>

            <label>اسم المحصول*</label>
            <input
              className="input-field"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label>النوع*</label>
            <input
              className="input-field"
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            />

            <label>السعر (جنيه/طن)*</label>
            <input
              className="input-field"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />

            <label>الوصف</label>
            <textarea
              className="input-field"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleInputChange}
            />

            <label>صورة المنتج*</label>
            <input
              className="input-field"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {previewImage && (
              <img src={previewImage} alt="Preview" className="preview-img" />
            )}

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button className="publish-btn" onClick={handlePublishClick}>
              نشر المنتج
            </button>

            {showConfirm && (
              <div className="confirm-box">
                <p>تأكيد نشر المنتج؟</p>
                <button className="confirm-yes" onClick={confirmPublish}>
                  نعم
                </button>
                <button className="confirm-no" onClick={() => setShowConfirm(false)}>
                  إلغاء
                </button>
              </div>
            )}

            {successMessage && (
              <div className="success-popup" onClick={() => setSuccessMessage(null)}>
                {successMessage}
              </div>
            )}
          </div>
        );

      case 'orders':
        return <OrdersTable />;

      case 'privacy':
        return <PrivacyPolicy />;

      case 'help':
        return <HelpCenter />;

      case 'rate':
        return <RateUs />;

      default:
        return null;
    }
  };

  /* ---------------- الواجهة الكاملة ---------------- */
  return (
    <div className="main-container">
      <aside className="sidebar">
        <div className="profile">
          <img src="/images/profile/user.png" alt="user" className="profile-img" />
          <h3>أحمد محمد</h3>
          <p>0116275357</p>
        </div>

        <nav className="menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <FaChevronLeft className="arrow-icon" />
              <span className="item-text">{item.text}</span>
              <span className="item-icon">{item.icon}</span>
            </div>
          ))}
        </nav>
      </aside>

      <section className="content">{renderContent()}</section>
    </div>
  );
}

export default Farmer;

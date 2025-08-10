import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const navigate  = useNavigate();
  const role      = localStorage.getItem('userRole') || 'merchant'; // default
  const hideTimer = useRef(null);

  /* ===== البحث ===== */
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    const elements = document.body.querySelectorAll('*');
    elements.forEach((el) => {
      if (el.innerText?.toLowerCase().includes(searchTerm.toLowerCase())) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.backgroundColor = '#fffd7f';
        setTimeout(() => (el.style.backgroundColor = ''), 2000);
      }
    });
  };

  /* ===== القائمة المنسدلة للحساب ===== */
  const openMenu  = () => {
    clearTimeout(hideTimer.current);
    setShowAccountMenu(true);
  };
  const closeMenu = () => {
    hideTimer.current = setTimeout(() => setShowAccountMenu(false), 300);
  };
  useEffect(() => () => clearTimeout(hideTimer.current), []);

  const renderAccountMenu = () => (
    <div
      className={`hdr-account-menu ${showAccountMenu ? 'show' : ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onClick={openMenu}
    >
      <div className="hdr-login">
        <FaUser className="hdr-icon" />
        <span>حسابي</span>
      </div>

      {showAccountMenu && (
        <div className="hdr-dropdown">
          <div onClick={() => navigate('/login')}>تسجيل الدخول</div>
          <div onClick={() => navigate('/signup')}>إنشاء حساب</div>
        </div>
      )}
    </div>
  );

  /* ===== JSX الرئيسي ===== */
  return (
    <header className="hdr-header" dir="rtl">
      {/* يمين الهيدر */}
      <div className="hdr-right">
        {/* روابط */}
        <nav className="hdr-nav-links">
          {role === 'merchant' && (
            <>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                الصفحة الرئيسية
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                الخدمات
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                المنتجات
              </NavLink>
            </>
          )}

          {role === 'farmer' && (
            <>
              <NavLink
                to="/FarmerHome"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/farmer_wallet" 
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                المحفظة {/* تم تعديل النص هنا */}
              </NavLink>
              <NavLink
                to="/farmer/add"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                أضف منتج
              </NavLink>
            </>
          )}

          {role === 'driver' && (
            <>
              <NavLink
                to="/transporter"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/driver_orders"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                الطلبات
              </NavLink>
              <NavLink
                to="/DriverServices"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                الخدمات
              </NavLink>
              <NavLink
                to="/Transporter_Wallet"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                المحفظة
              </NavLink>
            </>
          )}

          {role === 'quality' && (
            <>
              <NavLink
                to="/QualityHome"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/QualityInspection"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                فحص المحاصيل
              </NavLink>
              <NavLink
                to="/quality_reports"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                تقاريري
              </NavLink>
              <NavLink
                to="/quality_Wallet"
                className={({ isActive }) => (isActive ? 'hdr-active-link' : '')}
              >
                المحفظة
              </NavLink>
            </>
          )}
        </nav>
      </div>

      {/* اللوجو */}
      <div className="hdr-logo">
        <h1>محصولي</h1>
      </div>

      {/* يسار الهيدر */}
      <div className="hdr-left">
        {/* البحث */}
        <div className="hdr-search-bar">
          <input
            type="text"
            placeholder={
              role === 'driver'
                ? 'ابحث عن شحنة...'
                : role === 'quality'
                ? 'ابحث عن تحليل...'
                : role === 'farmer'
                ? 'ابحث عن محصول...'
                : 'Hinted search text'
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="hdr-search-icon" onClick={handleSearch} />
        </div>

        {/* أيقونات التاجر */}
        {role === 'merchant' && (
          <>
            <AiOutlineHeart
              className="hdr-icon"
              onClick={() => navigate('/wishlist')}
            />
            <FaShoppingCart
              className="hdr-icon"
              onClick={() => navigate('/cart')}
            />
            {renderAccountMenu()}
          </>
        )}

        {/* أيقونات الأدوار الأخرى */}
        {(role === 'driver' || role === 'quality' || role === 'farmer') &&
          renderAccountMenu()}
      </div>
    </header>
  );
};

export default Header;

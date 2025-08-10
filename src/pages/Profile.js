// src/components/ProfileSidebar/ProfileSidebar.js
import React from 'react';
import {
  FaEdit,
  FaUserCircle,
  FaGift,
  FaShieldAlt,
  FaQuestionCircle,
  FaStar,
  FaSignOutAlt,
  FaChevronLeft,
} from 'react-icons/fa';
import './Profile.css'; // <<<--- تأكد من أن اسم الملف مطابق

// بيانات قائمة الـ Sidebar
const menuItems = [
  { id: 'account', text: 'حسابي', icon: FaUserCircle, link: '/profile', highlight: true },
  { id: 'offers', text: 'العروض التي قدمتها', icon: FaGift, link: '/my-offers' },
  { id: 'privacy', text: 'سياسة الخصوصية', icon: FaShieldAlt, link: '/privacy-policy' },
  { id: 'help', text: 'مركز المساعدة', icon: FaQuestionCircle, link: '/help-center' },
  { id: 'rate', text: 'قيمنا', icon: FaStar, link: '/rate-us' },
  { id: 'logout', text: 'تسجيل الخروج', icon: FaSignOutAlt, link: '/logout' },
];

function ProfileSidebar() {
  // بيانات المستخدم (يفضل تمريرها كـ props)
  const userName = 'احمد محمد';
  const userPhone = '0116275357';

  // المسار الصحيح للصورة (افترض أنها في public/images/profile/)
  const userImage = '/images/profile/user.png'; // <<<--- تأكد من صحة هذا المسار عندك

  return (
    <aside className="profile-sidebar">
      {/* --- زر التعديل --- */}
      <button className="edit-profile-btn" aria-label="تعديل الملف الشخصي">
        <FaEdit />
      </button>

      {/* --- معلومات المستخدم --- */}
      <div className="user-info">
        <div className="avatar-container">
          {/* --- استخدام تاج img لعرض الصورة --- */}
          <img src={userImage} alt="الصورة الشخصية" className="user-profile-image" />
        </div>
        <h3 className="user-name">{userName}</h3>
        <p className="user-phone">{userPhone}</p>
      </div>

      {/* --- قائمة التنقل --- */}
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              {/* استخدم Link هنا إذا كنت تستخدم react-router-dom */}
              <a href={item.link || '#'} className={`nav-item ${item.highlight ? 'highlight' : ''}`}>
                <span className="item-icon-wrapper">
                  <item.icon className="item-icon" />
                </span>
                <span className="item-text">{item.text}</span>
                <FaChevronLeft className="item-chevron" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default ProfileSidebar;
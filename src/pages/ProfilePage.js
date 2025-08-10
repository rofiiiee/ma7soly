import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('/images/profile/user.png');
  const [profileData, setProfileData] = useState({
    fullName: 'أحمد محمد',
    email: 'ahmed.mohamed@exampple.com',
    phone: '0116275357',
    location: '33.4567, 35.6789',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-section">
          <img src={profileImage} alt="profile" className="profile-image" />
          {isEditing && (
            <input type="file" accept="image/*" onChange={handleImageChange} />
          )}
        </div>

        <h2>{profileData.fullName}</h2>
        <p>{profileData.phone}</p>

        <div className="profile-fields">
          <div className="field">
            <label>الاسم الكامل</label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profileData.fullName}</p>
            )}
          </div>

          <div className="field">
            <label>البريد الإلكتروني</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profileData.email}</p>
            )}
          </div>

          <div className="field-row">
            <div className="field">
              <label>رقم الهاتف</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{profileData.phone}</p>
              )}
            </div>

            <div className="field">
              <label>الموقع</label>
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{profileData.location}</p>
              )}
            </div>
          </div>
        </div>

        <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'حفظ' : 'تعديل الحساب'}
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;

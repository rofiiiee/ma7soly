// File: src/pages/Notifications.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faCheck, faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Notifications.css';

const NotificationBanner = () => {
  return (
    <div className="notification-banner">
      <div className="banner-overlay">
        <img src="/images/notifications.png" alt="Notifications Banner" className="notifications-logo" />
      </div>
    </div>
  );
};

const NotificationList = ({ items, onViewDetails, onDelete }) => {
  const groupedNotifications = items.reduce((acc, item) => {
    const dateKey = item.date || 'غير محدد';
    (acc[dateKey] = acc[dateKey] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="notifications-list-container">
      {Object.keys(groupedNotifications).length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', marginTop: '2rem' }}>لا توجد إشعارات لعرضها.</p>
      ) : (
        Object.entries(groupedNotifications).map(([date, notifications]) => (
          <div className="notification-group" key={date}>
            <h2 className="notification-date">{date}</h2>
            {notifications.map((notification) => (
              <div className="notification-card" key={notification.id}>
                <FontAwesomeIcon icon={notification.icon} className={`notification-icon ${notification.iconClass}`} />
                <div className="notification-content">
                  <h3 className="notification-title">{notification.title}</h3>
                  {notification.detailsLinkText && (
                    <span className="notification-details" onClick={() => onViewDetails(notification.id)}>
                      {notification.detailsLinkText}
                    </span>
                  )}
                </div>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="notification-delete-icon"
                  onClick={() => onDelete(notification.id)}
                  title="حذف الإشعار"
                />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

const NotificationDetailsView = ({ notification, onBack }) => {
  if (!notification || !notification.details) {
    return (
      <div className="notification-details-view">
        <FontAwesomeIcon icon={faArrowRight} className="back-arrow" onClick={onBack} />
        <p style={{ textAlign: 'center', color: '#777', marginTop: '2rem' }}>لا توجد تفاصيل لعرضها لهذا الإشعار.</p>
      </div>
    );
  }

  const { details, title, icon, iconClass } = notification;
  let displayDate = details.qualityCheckDate || 'غير محدد';
  try {
    const dateObj = new Date(details.qualityCheckDate);
    if (!isNaN(dateObj.getTime())) {
      displayDate = new Intl.DateTimeFormat('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }).format(dateObj);
    }
  } catch (e) {}

  return (
    <div className="notification-details-view">
      <FontAwesomeIcon icon={faArrowRight} className="back-arrow" onClick={onBack} />
      <div className="notification-group single-notification-header">
        <div className="notification-card notification-details-header">
          <FontAwesomeIcon icon={icon || faFileLines} className={`notification-icon ${iconClass || 'doc-icon'}`} />
          <div className="notification-content">
            <h3 className="notification-title">{title || 'تفاصيل التقرير'}</h3>
            <span className="notification-details dimmed">تفاصيل الفحص</span>
          </div>
        </div>
      </div>
      <div className="details-info-box">
        <div className="info-details">
          {details.productName && <p><strong>اسم المحصول :</strong> {details.productName}</p>}
          {details.qualityCheckDate && <p><strong>تاريخ فحص الجودة :</strong> {displayDate}</p>}
          {details.checkingCompany && <p><strong>اسم شركة الفحص :</strong> {details.checkingCompany}</p>}
          {details.checkType && <p><strong>نوع الفحص :</strong> {details.checkType}</p>}
          {details.location && <p><strong>موقع الفحص :</strong> {details.location}</p>}
          {details.totalPrice && <p><strong>السعر الإجمالي للفحص :</strong> {details.totalPrice}</p>}
          {details.inspectionDuration && <p><strong>مدة الفحص :</strong> {details.inspectionDuration}</p>}
        </div>
        <div className="info-summary">
          <h3>ملخص<br />الطلب</h3>
        </div>
      </div>
    </div>
  );
};

function Notifications() {
  const [activeDetailsId, setActiveDetailsId] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 'offer-456',
      type: 'offer',
      date: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }),
      icon: faCheck,
      iconClass: 'check-icon',
      title: 'تم نشر العرض الخاص بمنتجك',
      detailsLinkText: null,
      details: null
    }
  ]);

  useEffect(() => {
    const savedOrderString = localStorage.getItem('latestQualityCheckOrder');
    if (savedOrderString) {
      try {
        const savedOrder = JSON.parse(savedOrderString);
        const reportNotification = {
          id: `report-${savedOrder.timestamp || Date.now()}`,
          type: 'report',
          date: 'اليوم',
          icon: faFileLines,
          iconClass: 'doc-icon',
          title: `تقرير فحص محصول ${savedOrder.cropType || 'غير محدد'}`,
          detailsLinkText: 'المزيد من التفاصيل',
          details: {
            productName: savedOrder.cropType,
            qualityCheckDate: savedOrder.visitDate,
            checkingCompany: savedOrder.companyName,
            checkType: savedOrder.inspectionType,
            totalPrice: savedOrder.companyPrice,
            location: savedOrder.location,
            inspectionDuration: savedOrder.inspectionDuration
          }
        };

        setNotifications(prevNotifications => {
          const existingReportIndex = prevNotifications.findIndex(n => n.id.startsWith('report-'));
          if (existingReportIndex !== -1) {
            const updatedNotifications = [...prevNotifications];
            updatedNotifications[existingReportIndex] = reportNotification;
            return updatedNotifications;
          } else {
            return [reportNotification, ...prevNotifications];
          }
        });
      } catch (error) {
        console.error("Failed to parse saved order from localStorage:", error);
      }
    }
  }, []);

  const handleViewDetails = (id) => {
    setActiveDetailsId(id);
  };

  const handleBackToList = () => {
    setActiveDetailsId(null);
  };

  const handleDeleteNotification = (idToDelete) => {
    setNotifications(currentNotifications =>
      currentNotifications.filter(notification => notification.id !== idToDelete)
    );
    if (activeDetailsId === idToDelete) {
      setActiveDetailsId(null);
    }
  };

  const activeNotification = activeDetailsId
    ? notifications.find(n => n.id === activeDetailsId)
    : null;

  return (
    <div className="notifications-page-container">
      <NotificationBanner />
      {activeNotification ? (
        <NotificationDetailsView
          notification={activeNotification}
          onBack={handleBackToList}
        />
      ) : (
        <NotificationList
          items={notifications}
          onViewDetails={handleViewDetails}
          onDelete={handleDeleteNotification}
        />
      )}
    </div>
  );
}

export default Notifications;

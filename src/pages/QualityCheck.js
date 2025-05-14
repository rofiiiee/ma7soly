import React, { useState } from "react";
import './QualityCheck.css';



const companies = [
  { id: 1, name: "شركة الحمد لاند", price: 3000, logo: "/images/hamdland.png", visitAfterDays: 7, duration: "أسبوع" },
  { id: 2, name: "شركة Egy Basf", price: 2500, logo: "/images/egybasf.png", visitAfterDays: 10, duration: "10 أيام" }
];

const QualityCheck = () => {
  const [manualLocation, setManualLocation] = useState('');
  const [cropType, setCropType] = useState('');
  const [inspectionType, setInspectionType] = useState('');
  const [step, setStep] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinue = () => {
    if (!manualLocation.trim() || !cropType.trim() || !inspectionType.trim()) {
      alert('يرجى إدخال جميع البيانات المطلوبة.');
      return;
    }
    setStep(2);
  };

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleSubmitCompany = () => {
    setStep(3);
  };

  const calculateVisitDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return new Intl.DateTimeFormat('ar-EG', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }).format(date);
  };

  const handleAccept = () => {
    if (!selectedCompany) return;
    setIsModalOpen(true);
  };

  const handleConfirmAndProceed = () => {
    setIsModalOpen(false);
    const orderDetails = {
      location: manualLocation,
      cropType,
      inspectionType,
      companyName: selectedCompany.name,
      companyPrice: `${selectedCompany.price.toLocaleString('ar-EG')} ج.م`,
      visitDate: calculateVisitDate(selectedCompany.visitAfterDays),
      inspectionDuration: selectedCompany.duration,
      timestamp: new Date().toISOString()
    };
    try {
      localStorage.setItem('latestQualityCheckOrder', JSON.stringify(orderDetails));
      window.location.href = "/Notifications";
    } catch (error) {
      alert("حدث خطأ أثناء حفظ تفاصيل الطلب.");
    }
  };

  const handleReject = () => {
    setSelectedCompany(null);
    setStep(2);
  };

  return (
    <div className="quality-container">
      <div className="quality-banner">
        <img src="/images/quality-banner.png" alt="quality" className="banner-img" />
      </div>

      {step === 1 && (
        <div className="quality-box">
          <div className="form-group">
            <label htmlFor="manual-location-input">الموقع:</label>
            <input id="manual-location-input" type="text" className="input-field" value={manualLocation} onChange={(e) => setManualLocation(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="cropType-input">نوع المحصول:</label>
            <input id="cropType-input" type="text" className="input-field" value={cropType} onChange={(e) => setCropType(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="inspectionType-input">نوع الفحص:</label>
            <input id="inspectionType-input" type="text" className="input-field" value={inspectionType} onChange={(e) => setInspectionType(e.target.value)} />
          </div>
          <button className="submit-btn" onClick={handleContinue}>التالي</button>
        </div>
      )}

      {step === 2 && (
        <div className="companies-box">
          <h3 className="choose-title">اختر شركة الفحص</h3>
          {companies.map(company => (
            <div key={company.id} className={`company-card ${selectedCompany?.id === company.id ? 'selected' : ''}`} onClick={() => handleCompanySelect(company)}>
              <img src={company.logo} alt={company.name} className="company-logo" />
              <div className="company-details">
                <div className="company-name">{company.name}</div>
                <div className="company-price">{company.price.toLocaleString('ar-EG')} ج.م</div>
                <div className="company-date">تاريخ الزيارة: {calculateVisitDate(company.visitAfterDays)}</div>
                <div className="company-duration">المدة: {company.duration}</div>
              </div>
            </div>
          ))}
          {selectedCompany && <button className="submit-btn" onClick={handleSubmitCompany}>تأكيد</button>}
        </div>
      )}

      {step === 3 && selectedCompany && (
        <div className="quality-box confirmation-box">
          <h3>تأكيد الطلب</h3>
          <p><strong>الموقع:</strong> {manualLocation}</p>
          <p><strong>المحصول:</strong> {cropType}</p>
          <p><strong>الفحص:</strong> {inspectionType}</p>
          <p><strong>الشركة:</strong> {selectedCompany.name}</p>
          <p><strong>السعر:</strong> {selectedCompany.price.toLocaleString('ar-EG')} ج.م</p>
          <p><strong>الزيارة:</strong> {calculateVisitDate(selectedCompany.visitAfterDays)}</p>
          <p><strong>المدة:</strong> {selectedCompany.duration}</p>
          <button className="accept-btn" onClick={handleAccept}>تأكيد</button>
          <button className="reject-btn" onClick={handleReject}>رفض</button>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="success-modal">
            <h2>تم الحجز بنجاح</h2>
            <p>تم تأكيد حجز شركة {selectedCompany.name} لفحص المحصول يوم {calculateVisitDate(selectedCompany.visitAfterDays)}</p>
            <button className="modal-continue-btn" onClick={handleConfirmAndProceed}>استمرار</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityCheck;

import React, { useState } from 'react';
import './quality_reports.css';

const reports = [
  {
    id: 1,
    image: '/images/wheat.jpg',
    name: 'قمح',
    testType: 'تحليل بصري',
    date: '2025-05-06',
    price: '1300',
    status: 'مقبول'
  },
  {
    id: 2,
    image: '/images/cotton.png',
    name: 'قطن',
    testType: 'تحليل نسيجي',
    date: '2025-05-05',
    price: '2000',
    status: 'مرفوض'
  },
];

const QualityReports = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReports = reports.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status) => {
    if (status === 'مقبول') return 'status accepted';
    if (status === 'مرفوض') return 'status rejected';
    return 'status pending';
  };

  return (
    
    <div className="reports-container">
         <div className="banner-section">
        <img src="/images/quality_banner.png" alt="فحص الجودة" className="banner-image" />
      </div>
      <div className="reports-header">
        <h2>تقارير الفحص</h2>
        <input
          type="text"
          placeholder="ابحث باسم المحصول..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="reports-table-wrapper">
        
        <table className="reports-table">
          <thead>
            <tr>
              <th>#</th>
              <th>صورة</th>
              <th>الاسم</th>
              <th>نوع الفحص</th>
              <th>التاريخ</th>
              <th>الحالة</th>
              <th>السعر</th>
              <th>تفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((r, i) => (
              <tr key={r.id}>
                <td>{i + 1}</td>
                <td><img src={r.image} alt={r.name} className="crop-img" /></td>
                <td>{r.name}</td>
                <td>{r.testType}</td>
                <td>{r.date}</td>
                <td><span className={getStatusClass(r.status)}>{r.status}</span></td>
                <td>{r.price} ج.م</td>
                <td><button className="view-btn">عرض</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QualityReports;

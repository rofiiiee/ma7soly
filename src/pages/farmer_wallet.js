import React from 'react';
import './farmer_wallet.css';

const FarmerWalletPage = () => {
  return (
    <div className="farmer-wallet-page">
      <div className="farmer-wallet-header">
        <h2>محفظتي الزراعية</h2>
        <p>تفاصيل أرباحك والمبيعات الزراعية</p>
      </div>

      {/* ✅ الرصيد الحالي */}
      <div className="farmer-wallet-balance">
        <h3>الرصيد الحالي:</h3>
        <p className="amount">5,500 ج.م</p>
      </div>

      {/* ✅ إجمالي المبيعات */}
      <div className="farmer-wallet-summary">
        <div>
          <span>عدد المنتجات المباعة:</span>
          <strong>15</strong>
        </div>
        <div>
          <span>إجمالي المبيعات:</span>
          <strong>25,000 ج.م</strong>
        </div>
      </div>

      {/* ✅ جدول المبيعات */}
      <div className="farmer-wallet-table">
        <h4>تفاصيل المبيعات الأخيرة:</h4>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>المنتج</th>
              <th>الكمية</th>
              <th>المبلغ</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>103</td>
              <td>طماطم</td>
              <td>100 كجم</td>
              <td>3500 ج.م</td>
              <td>02/05/2025</td>
            </tr>
            <tr>
              <td>104</td>
              <td>خيار</td>
              <td>150 كجم</td>
              <td>1800 ج.م</td>
              <td>01/05/2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ✅ زر التحويل */}
      <div className="farmer-wallet-transfer">
        <button> تحويل الأرباح لحسابي البنكي</button>
      </div>
    </div>
  );
};

export default FarmerWalletPage;

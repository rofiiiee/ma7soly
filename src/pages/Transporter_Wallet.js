import React from 'react';
import './Transporter_Wallet.css';

const WalletPage = () => {
  return (
    <div className="wallet-page">
      <div className="wallet-header">
        <h2>محفظتي</h2>
        <p>كل تفاصيل أرباحك وسجل المعاملات</p>
      </div>

      {/* ✅ الرصيد الحالي */}
      <div className="wallet-balance">
        <h3>الرصيد الحالي:</h3>
        <p className="amount">3,200 ج.م</p>
      </div>

      {/* ✅ إجمالي الأرباح */}
      <div className="wallet-summary">
        <div>
          <span>عدد الشحنات:</span>
          <strong>8</strong>
        </div>
        <div>
          <span>إجمالي الأرباح:</span>
          <strong>15,000 ج.م</strong>
        </div>
      </div>

      {/* ✅ جدول الأرباح */}
      <div className="wallet-table">
        <h4>تفاصيل الشحنات المكتملة:</h4>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>من</th>
              <th>إلى</th>
              <th>المبلغ</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>132</td>
              <td>أسوان</td>
              <td>سوهاج</td>
              <td>2500 ج.م</td>
              <td>01/05/2025</td>
            </tr>
            <tr>
              <td>128</td>
              <td>الأقصر</td>
              <td>قنا</td>
              <td>2200 ج.م</td>
              <td>30/04/2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ✅ زر التحويل */}
      <div className="wallet-transfer">
        <button> تحويل الأرباح لحسابي البنكي</button>
      </div>
    </div>
  );
};

export default WalletPage;

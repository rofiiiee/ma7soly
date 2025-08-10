import React from 'react';
import './quality_Wallet.css';   /* ملف الـ CSS الخاص بفاحص الجودة */

const InspectorWalletPage = () => {
  return (
    <div className="wallet-page">
      {/* ===== رأس الصفحة ===== */}
      <div className="wallet-header">
        <h2>محفظتي</h2>
        <p>كل تفاصيل مستحقاتك وسجل الفحوصات</p>
      </div>

      {/* ===== الرصيد الحالي ===== */}
      <div className="wallet-balance">
        <h3>الرصيد الحالي:</h3>
        <p className="amount">4,750 ج.م</p>
      </div>

      {/* ===== ملخص الفحوصات ===== */}
      <div className="wallet-summary">
        <div>
          <span>عدد الفحوصات:</span>
          <strong>12</strong>
        </div>
        <div>
          <span>إجمالي المستحقات:</span>
          <strong>23,000 ج.م</strong>
        </div>
      </div>

      {/* ===== جدول الفحوصات المكتملة ===== */}
      <div className="wallet-table">
        <h4>تفاصيل الفحوصات المكتملة:</h4>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>المحصول</th>
              <th>نوع الفحص</th>
              <th>المبلغ</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>205</td>
              <td>قمح</td>
              <td>تحليل رطوبة</td>
              <td>1,800 ج.م</td>
              <td>05/05/2025</td>
            </tr>
            <tr>
              <td>198</td>
              <td>بطيخ</td>
              <td>تحليل كيميائي</td>
              <td>2,200 ج.م</td>
              <td>02/05/2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===== زر التحويل ===== */}
      <div className="wallet-transfer">
        <button>تحويل المستحقات لحسابي البنكي</button>
      </div>
    </div>
  );
};

export default InspectorWalletPage;

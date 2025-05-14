import React from 'react';
import './OrdersTable.css';

const orders = [
  { id: 1, email: "user@gmail.com", address: "134234", product: "طماطم", quantity: "1 طن", price: "7000 جنيه", status: "Processing" },
  { id: 2, email: "user@gmail.com", address: "21asd3", product: "بذور الشيبا", quantity: "3 طن", price: "5000 جنيه", status: "تم التوصيل" },
  { id: 3, email: "user@gmail.com", address: "3af33r", product: "ذرة", quantity: "1 طن", price: "3000 جنيه", status: "مكتمل" },
  { id: 4, email: "user@gmail.com", address: "4234", product: "بصل احمر", quantity: "2 طن", price: "10000 جنيه", status: "يُعالج" },
  { id: 5, email: "user@gmail.com", address: "5634f", product: "بذور الكتان", quantity: "1.5 طن", price: "2000 جنيه", status: "تم التوصيل" },
  { id: 6, email: "user@gmail.com", address: "6234s", product: "بطيخ", quantity: "3 طن", price: "13000 جنيه", status: "يُعالج" },
  { id: 7, email: "user@gmail.com", address: "7234", product: "قطن", quantity: "3 طن", price: "1000 جنيه", status: "يُعالج" },
];

function OrdersTable() {
  return (
    <div className="orders-table-container">
      <h2 className="orders-title">الطلبات المستلمة</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>id</th>
            <th>البريد الالكتروني</th>
            <th>العنوان</th>
            <th>المنتج</th>
            <th>كمية</th>
            <th>السعر</th>
            <th>حالة الطلب</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>
                <span className={`status-badge ${order.status.replace(/\s/g, '-')}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;

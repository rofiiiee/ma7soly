import React from "react";
import './transporter_orders.css';

const orders = [
  {
    id: 1,
    productName: 'بذور كتان',
    image: '/images/flax.png',
    status: 'في الطريق',
    from: 'أسوان',
    to: 'سوهاج',
    quantity: '5 طن',
  },
  {
    id: 2,
    productName: 'بطيخ',
    image: '/images/watermelon.png',
    status: 'قيد الانتظار',
    from: 'أسوان',
    to: 'أسيوط',
    quantity: '3 طن',
  },
  {
    id: 3,
    productName: 'قطن',
    image: '/images/cotton.png',
    status: 'تم التوصيل',
    from: 'أسوان',
    to: 'الأقصر',
    quantity: '1 طن',
  }
];

function DriverOrders() {
  return (
    <div className="orders-page">

      {/* ✅ Banner Section */}
      <div className="banner-section">
        <img src="images/transporter/shipping-banner.png" alt="بانر الطلبات" className="banner-image" />
      </div>

      <header className="orders-header">
        <h2>طلباتي السابقة</h2>
      </header>

      <div className="orders-container">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <img src={order.image} alt={order.productName} className="order-image" />
            <div className="order-info">
              <h3>{order.productName}</h3>
              <p><strong>من:</strong> {order.from}</p>
              <p><strong>إلى:</strong> {order.to}</p>
              <p><strong>الكمية:</strong> {order.quantity}</p>
              <p className={`status ${order.status === 'قيد الانتظار' ? 'pending' : order.status === 'تم التوصيل' ? 'delivered' : 'in-progress'}`}>
                {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriverOrders;

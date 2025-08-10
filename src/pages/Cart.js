
// src/pages/Cart/Cart.js
import React from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const initialCartItems = [
  {
    id: 1,
    name: 'قطن',
    price: 10000,
    quantity: 1,
    unit: 'كيلو جرام',
    image: '/images/cotton.png',
  },
  {
    id: 2,
    name: 'بذور الكتان',
    price: 7000,
    quantity: 1,
    unit: 'كيلو جرام',
    image: '/images/flax.png',
  },
  {
    id: 3,
    name: 'طماطم',
    price: 4000,
    quantity: 1,
    unit: 'كيلو جرام',
    image: '/images/products/tomato.png',
  },
];

function Cart() {
  const [cartItems, setCartItems] = React.useState(initialCartItems);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 500;
  const storage = 0;
  const total = subtotal + delivery + storage;

  const handleQuantityChange = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="cartpg-cart-page">
      <div className="cartpg-cart-banner">
        <img
          src="/images/cart_banner_bg.png"
          alt="عربة التسوق"
          className="cartpg-banner-bg"
        />
      </div>

      <div className="cartpg-cart-content-area">
        <div className="cartpg-cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cartpg-cart-item-card">
              <img src={item.image} alt={item.name} className="cartpg-item-image" />
              <div className="cartpg-item-info">
                <span className="cartpg-item-name">{item.name}</span>
                <div className="cartpg-item-price">
                  <span className="cartpg-price-value">{item.price.toLocaleString()}</span>
                  <span className="cartpg-price-currency"> ج.م</span>
                </div>
              </div>
              <div className="cartpg-item-controls">
                <div className="cartpg-item-quantity">
                  <button
                    className="cartpg-quantity-btn decrease"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    aria-label="Decrease quantity"
                  > -
                    <FaMinus />
                  </button>
                  <span className="cartpg-quantity-display">{item.quantity}</span>
                  <button
                    className="cartpg-quantity-btn increase"
                    onClick={() => handleQuantityChange(item.id, 1)}
                    aria-label="Increase quantity"
                  > +
                    <FaPlus />
                  </button>
                  {item.unit && <span className="cartpg-item-unit">{item.unit}</span>}
                </div>
              </div>
              <button
                className="cartpg-item-delete-btn"
                onClick={() => handleRemoveItem(item.id)}
                aria-label="Remove item"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
          {cartItems.length === 0 && <p className="cartpg-empty-cart-message">عربة التسوق فارغة.</p>}
        </div>

        <div className="cartpg-order-summary">
          <h2 className="cartpg-summary-title">ملخص الطلب</h2>
          <div className="cartpg-summary-details">
            <div className="cartpg-summary-row">
              <span>الاجمالي :</span>
              <span>{subtotal.toLocaleString()}.0 ج.م</span>
            </div>
            <div className="cartpg-summary-row">
              <span>التوصيل :</span>
              <span>{delivery.toLocaleString()}.0 ج.م</span>
            </div>
            <div className="cartpg-summary-row">
              <span>تخزين :</span>
              <span>{storage.toLocaleString()}.0 ج.م</span>
            </div>
          </div>
          <hr className="cartpg-summary-divider" />
          <div className="cartpg-summary-row cartpg-total">
            <span>اجمالي الفاتورة</span>
            <span>{total.toLocaleString()} ج.م</span>
          </div>

          <button className="cartpg-checkout-button" onClick={() => navigate('/payment')}>
            الدفع
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

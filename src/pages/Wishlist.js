// src/pages/Wishlist/Wishlist.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './Wishlist.css';

const sampleWishlistItems = [
  {
    id: 1,
    name: 'بطاطس',
    category: 'خضروات',
    price: 5000,
    unit: 'طن',
    rating: 3,
    image: '/images/potatoes.png',
  },
  {
    id: 2,
    name: 'أرز',
    category: 'حبوب',
    price: 5000,
    unit: 'طن',
    rating: 4,
    image: '/images/rice.png',
  },
  {
    id: 3,
    name: 'برتقال',
    category: 'فاكهة',
    price: 5000,
    unit: 'طن',
    rating: 3,
    image: '/images/oranges.png',
  },
  {
    id: 4,
    name: 'بطيخ',
    category: 'فاكهة',
    price: 5000,
    unit: 'طن',
    rating: 3,
    image: '/images/watermelon.png',
  }
];

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="product-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`star ${starValue <= rating ? 'filled' : 'empty'}`}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ item, onViewMore }) => {
  return (
    <div className={`product-card ${item.highlighted ? 'highlighted' : ''}`}>
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="product-info">
        <div className="product-name-category">
          <span className="product-name">{item.name}</span>
          <span className="product-category">{item.category}</span>
        </div>
        <p className="product-price">
          {item.price.toLocaleString()} ج.م / {item.unit}
        </p>
        <RatingStars rating={item.rating} />
      </div>
      <button className="view-more-button" onClick={() => onViewMore(item.id)}>
        عرض المزيد
      </button>
    </div>
  );
};

function Wishlist() {
  const [wishlistItems] = React.useState(sampleWishlistItems);
  const navigate = useNavigate();

  const handleViewMore = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-banner">
        <img
          src="/images/wishlist_banner_bg.png"
          alt="المفضلة"
          className="banner-bg"
        />
      </div>

      <div className="wishlist-content">
        {wishlistItems.length > 0 ? (
          <div className="products-grid">
            {wishlistItems.map((item) => (
              <ProductCard key={item.id} item={item} onViewMore={handleViewMore} />
            ))}
          </div>
        ) : (
          <p className="empty-wishlist-message">قائمة المفضلة فارغة.</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;

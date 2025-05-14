import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaShoppingCart,
  FaDollarSign,
  FaHeart,
  FaShareAlt,
} from 'react-icons/fa';
import { sampleProducts } from '../data/products';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = sampleProducts.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [showWishlistPrompt, setShowWishlistPrompt] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [activeCategory, setActiveCategory] = useState('الكل');
  const categories = ['الكل', 'حبوب', 'خضروات', 'فاكهة', 'الياف'];

  if (!product) {
    return <h2 style={{ padding: 50 }}>⚠ المنتج غير موجود</h2>;
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => setShowAddedMessage(true);
  const handleBuyNow = () => navigate('/cart');
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleWishlist = () => setShowWishlistPrompt(true);
  const confirmWishlist = (add) => {
    if (add) navigate('/wishlist');
    else setShowWishlistPrompt(false);
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="proddetails-product-details-page">
      <div className="proddetails-banner">
        <img src="/images/products/prod_bg.png" alt="خلفية منتجاتنا" className="proddetails-banner-bg" />
        <div className="proddetails-banner-overlay" />
      </div>

      <div className="proddetails-product-main-container">
        <aside className="proddetails-sidebar-filters">
          <div className="proddetails-filter-widget proddetails-search-widget">
            <input
              type="text"
              placeholder="بحث في المنتجات..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="proddetails-search-input"
            />
          </div>

          <div className="proddetails-filter-widget proddetails-quantity-widget">
            <h4>الكمية</h4>
            <div className="proddetails-quantity-inputs">
              <input
                type="number"
                placeholder="min"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="max"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="proddetails-filter-widget proddetails-categories-widget">
            <h4>Categories</h4>
            <ul className="proddetails-category-list">
  {categories.map(cat => (
    <li key={cat}>
      <button
        className="proddetails-category-link"
        onClick={() => navigate('/products?category=' + encodeURIComponent(cat))}
      >
        <span className="proddetails-category-text">{cat}</span>
        <span className="proddetails-category-arrow">{'>'}</span>
      </button>
    </li>
  ))}
</ul>
          </div>
        </aside>

        <div className="proddetails-details-section">
          <h1>{product.name}</h1>
          <p className="proddetails-price">{totalPrice} جنيه</p>

          <div className="proddetails-description-details">
            <p>الوصف: {product.description}</p>
            <p>الفئة: {product.category}</p>
            <p>المُعلن: {product.owner}</p>
            <p>تاريخ الإعلان: {product.date}</p>
          </div>

          <div className="proddetails-quantity-wishlist-container">
            <div className="proddetails-quantity-control">
              <label>الكمية</label>
              <div className="proddetails-control-buttons">
                <button className="proddetails-decrease-btn" onClick={decreaseQuantity}>-</button>
                <input type="text" value={quantity.toString().padStart(2, '0')} readOnly />
                <button className="proddetails-increase-btn" onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <button className="proddetails-wishlist-button" onClick={handleWishlist}><FaHeart /></button>
          </div>

          <div className="proddetails-action-buttons">
            <button className="proddetails-add-cart-btn" onClick={handleAddToCart}>
              <FaShoppingCart /> أضف للعربة
            </button>
            <button className="proddetails-buy-now-btn" onClick={handleBuyNow}>
              <FaDollarSign /> اشترِ الآن
            </button>
          </div>

          <div className="proddetails-share" onClick={handleShare}>
            <FaShareAlt />
            <span>{copied ? 'تم نسخ الرابط ✅' : 'مشاركة المحصول'}</span>
          </div>

          {showAddedMessage && (
            <p style={{ color: 'green', marginTop: 10 }}>✅ تم إضافة المنتج للعربة</p>
          )}

          {showWishlistPrompt && (
            <div style={{ marginTop: 20 }}>
              <p>🎉 تم إضافة المنتج للمفضلة. هل ترغب في الانتقال لصفحة المفضلة؟</p>
              <button onClick={() => confirmWishlist(true)}>نعم</button>
              <button onClick={() => confirmWishlist(false)} style={{ marginRight: 10 }}>لا</button>
            </div>
          )}
        </div>

        <div className="proddetails-image-section">
          <img src={product.image} alt={product.name} className="proddetails-product-main-image" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { sampleProducts } from '../data/products';
import './Products.css';

const categories = ['الكل', 'حبوب', 'خضروات', 'فاكهة', 'الياف'];

function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const category = new URLSearchParams(location.search).get('category') || 'الكل';
  const productId = params.id;

  const filteredProducts = sampleProducts.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = category === 'الكل' || p.category === category;
    const priceMatch =
      (!minPrice || p.price >= parseInt(minPrice)) &&
      (!maxPrice || p.price <= parseInt(maxPrice));
    return nameMatch && categoryMatch && priceMatch;
  });

  const product = sampleProducts.find(p => p.id === parseInt(productId));

  const handleCategoryClick = (cat) => {
    navigate(`/products?category=${cat}`);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleBackToList = () => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="products-page-container">
      <section className="page-banner">
        <div className="banner-content">
          <div className="banner-text-side">
            <img src="/images/products/prod_bg.png" alt="منتجاتنا" />
          </div>
        </div>
      </section>

      <div className="products-content-area">
        <aside className="sidebar-filters">
          <div className="filter-widget search-widget">
            <input
              type="text"
              placeholder="بحث في المنتجات..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-widget quantity-widget">
            <h4>الكمية</h4>
            <div className="quantity-inputs">
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

          <div className="filter-widget categories-widget">
            <h4>Categories</h4>
            <ul className="category-list">
              {categories.map(cat => (
                <li
                  key={cat}
                  className={category === cat ? 'active-category' : ''}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <button className="category-link">
                    <span>{cat}</span>
                    <span className="category-arrow">&lt;</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="products-grid-container">
          {!productId ? (
            <div className="products-grid-page">
              {filteredProducts.length === 0 ? (
                <p style={{ textAlign: 'center', width: '100%' }}>لا توجد نتائج.</p>
              ) : (
                filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="product-card-page"
                    onClick={() => handleProductClick(product.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info-page">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-rating">
                        {[...Array(Math.round(product.rating))].map((_, i) => (
                          <span key={i} className="star filled">★</span>
                        ))}
                      </div>
                      <p className="product-price">{product.price} جنيه</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : product ? (
            <div className="details-section">
              <button onClick={handleBackToList} style={{ marginBottom: 15 }}>← رجوع للمنتجات</button>
              <h1>{product.name}</h1>
              <p className="price">{product.price} جنيه</p>
              <p>الوصف: {product.description}</p>
              <p>الفئة: {product.category}</p>
              <p>المُعلن: {product.owner}</p>
              <p>تاريخ الإعلان: {product.date}</p>
              <div className="action-buttons" style={{ marginTop: '20px' }}>
                <button className="add-cart-btn">أضف للعربة</button>
                <button className="buy-now-btn">اشترِ الآن</button>
              </div>
            </div>
          ) : (
            <p>⚠ المنتج غير موجود</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default ProductsPage;

// src/pages/Products.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { sampleProducts } from '../data/products';
import './Products.css';

function ProductCardPage({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className="prodpg-product-card-page"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={product.image} alt={product.name} className="prodpg-product-image" />
      <div className="prodpg-product-info-page">
        <h3 className="prodpg-product-name">{product.name}</h3>
        <div className="prodpg-product-rating">
          {[...Array(Math.round(product.rating))].map((_, i) => (
            <span key={`star-${i}`} className="prodpg-star prodpg-filled">★</span>
          ))}
        </div>
        <p className="prodpg-product-price">{product.price} جنيه</p>
      </div>
    </div>
  );
}

const categories = ['الكل', 'حبوب', 'خضروات', 'فاكهة', 'الياف'];

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [activeCategory, setActiveCategory] = useState('الكل');

  const filteredProducts = sampleProducts.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = activeCategory === 'الكل' || product.category === activeCategory;
    const priceMatch =
      (!minPrice || product.price >= parseInt(minPrice)) &&
      (!maxPrice || product.price <= parseInt(maxPrice));
    return nameMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="prodpg-products-page-container">
      <section className="prodpg-banner-wrapper">
  <img src="/images/products/prod_bg.png" alt="منتجاتنا" className="prodpg-banner-image" />
</section>

      <div className="prodpg-products-content-area">
        <aside className="prodpg-sidebar-filters">
          <div className="prodpg-filter-widget prodpg-search-widget">
            <input
              type="text"
              placeholder="بحث في المنتجات..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="prodpg-search-input"
            />
          </div>

          <div className="prodpg-filter-widget prodpg-quantity-widget">
            <h4>الكمية</h4>
            <div className="prodpg-quantity-inputs">
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

          <div className="prodpg-filter-widget prodpg-categories-widget">
            <h4>Categories</h4>
            <ul className="prodpg-category-list">
              {categories.map(cat => (
                <li
                  key={cat}
                  className={activeCategory === cat ? 'active-category' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  <button className="prodpg-category-link">
                    <span>{cat}</span>
                    <span className="prodpg-category-arrow">&lt;</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="prodpg-products-grid-container">
          <div className="prodpg-products-grid-page">
            {filteredProducts.length === 0 ? (
              <p style={{ textAlign: 'center', width: '100%' }}>
                لا توجد نتائج مطابقة.
              </p>
            ) : (
              filteredProducts.map(product => (
                <ProductCardPage key={product.id} product={product} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;

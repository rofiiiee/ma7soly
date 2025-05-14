import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import './App.css'; // Global styles or main layout styles

// --- Sample Product Data ---
// In a real app, this would likely come from an API
const sampleProducts = [
  { id: 1, name: 'بذور الشيا', price: '7000', imageUrl: 'https://via.placeholder.com/300x200/CCCCCC/000000?text=Chia+Seeds' },
  { id: 2, name: 'بذور الكتان', price: '7000', imageUrl: 'https://via.placeholder.com/300x200/AABBCC/000000?text=Flax+Seeds' },
  { id: 3, name: 'أرز ابيض', price: '10000', imageUrl: 'https://via.placeholder.com/300x200/DDDDDD/000000?text=White+Rice' },
  { id: 4, name: 'ذرة', price: '9000', imageUrl: 'https://via.placeholder.com/300x200/FFFF00/000000?text=Corn' },
  { id: 5, name: 'بذور القمح', price: '5000', imageUrl: 'https://via.placeholder.com/300x200/D2B48C/000000?text=Wheat+Seeds' },
  { id: 6, name: 'بذور الشيا', price: '7000', imageUrl: 'https://via.placeholder.com/300x200/CCCCCC/000000?text=Chia+Seeds' },
  { id: 7, name: 'أرز ابيض', price: '10000', imageUrl: 'https://via.placeholder.com/300x200/DDDDDD/000000?text=White+Rice' },
  { id: 8, name: 'بذور الكتان', price: '7000', imageUrl: 'https://via.placeholder.com/300x200/AABBCC/000000?text=Flax+Seeds' },
  { id: 9, name: 'ذرة', price: '10000', imageUrl: 'https://via.placeholder.com/300x200/FFFF00/000000?text=Corn' },
];
// --- End Sample Data ---


function App() {
  return (
    // Set direction to Right-to-Left for Arabic
    <div className="App" dir="rtl">
      <Header />
      <Banner />
      <main className="main-content-area">
        <Sidebar />
        <div className="products-section">
          <ProductGrid products={sampleProducts} />
          <Pagination />
        </div>
      </main>
      {/* You can add a Footer component here if needed */}
    </div>
  );
}

export default App;
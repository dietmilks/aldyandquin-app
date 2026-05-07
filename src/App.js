import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNow = (productName) => {
    setSelectedProduct(productName);
    setShowModal(true);
  };

  return (
    <div className="landing-page">
      {/* Buy Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h3>Buy {selectedProduct}</h3>
            <p>Choose your preferred platform:</p>
            <div className="platform-buttons">
              <a href="https://shopee.com" target="_blank" rel="noopener noreferrer" className="platform-btn shopee">
                🛒 Shopee
              </a>
              <a href="https://tokopedia.com" target="_blank" rel="noopener noreferrer" className="platform-btn tokopedia">
                🏪 Tokopedia
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <img src="https://i.ibb.co.com/b5YkndF6/LOGO-1.png" alt="aldy's and quin" />
        </a>
        <ul className="nav-links">
          <div className="menu-toggle">☰</div>
          <li><a href="#home" onClick={() => setActiveTab('home')}>Home</a></li>
          <li><a href="#collection" onClick={() => setActiveTab('collection')}>Products</a></li>
          <li><a href="#about" onClick={() => setActiveTab('about')}>About</a></li>
          <li><a href="#contact" onClick={() => setActiveTab('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className='find123'>Find your <span style={{color: '#38B6FF'}}>best</span></h1>
          <h1 className='find124'>fashion at</h1>
          <h1 className='find125'>Aldy's & <span style={{color: '#FFC2C2'}}>Quinn</span></h1>
          <p className="tagline">Comfortable & Cute Clothes for Your Little Ones</p>
          <p className="subtitle">Where happiness meets style</p>
          <a href="#collection" className="cta-button">
            Shop Now
          </a>
        </div>
        <img src="/model.png" alt="Kids Fashion" className="hero-image" />
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection">
        <div className="collection-header">
          <h2>Products</h2>
          <p className="section-subtitle">Discover our latest collection</p>
        </div>
        
        {/* Category Filters */}
        <div className="category-filters">
          <button className="category-btn active">All</button>
          <button className="category-btn">Tops</button>
          <button className="category-btn">Bottoms</button>
          <button className="category-btn">Outerwear</button>
          <button className="category-btn">One Set</button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">👕</div>
            <div className="product-info">
              <span className="product-category">Tops</span>
              <h3>Cotton T-Shirt</h3>
              <p className="product-desc">Soft cotton fabric, perfect for everyday wear</p>
              <div className="product-colors">
                <span className="color-dot" style={{background: '#fff'}}></span>
                <span className="color-dot" style={{background: '#a8d8ea'}}></span>
                <span className="color-dot" style={{background: '#ffb6c1'}}></span>
                <span className="color-dot" style={{background: '#98d8c8'}}></span>
              </div>
              <p className="price">$14.99</p>
              <button className="buy-btn" onClick={() => handleBuyNow('Cotton T-Shirt')}>Buy Now</button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">👖</div>
            <div className="product-info">
              <span className="product-category">Bottoms</span>
              <h3>Comfort Pants</h3>
              <p className="product-desc">Stretchable waistband for maximum comfort</p>
              <div className="product-colors">
                <span className="color-dot" style={{background: '#4a4a4a'}}></span>
                <span className="color-dot" style={{background: '#8b4513'}}></span>
                <span className="color-dot" style={{background: '#2f4f4f'}}></span>
              </div>
              <p className="price">$24.99</p>
              <button className="buy-btn" onClick={() => handleBuyNow('Comfort Pants')}>Buy Now</button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">👗</div>
            <div className="product-info">
              <span className="product-category">Dresses</span>
              <h3>Summer Dress</h3>
              <p className="product-desc">Light and breezy, perfect for warm days</p>
              <div className="product-colors">
                <span className="color-dot" style={{background: '#ffb6c1'}}></span>
                <span className="color-dot" style={{background: '#fffacd'}}></span>
                <span className="color-dot" style={{background: '#e6e6fa'}}></span>
              </div>
              <p className="price">$29.99</p>
              <button className="buy-btn" onClick={() => handleBuyNow('Summer Dress')}>Buy Now</button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">🧥</div>
            <div className="product-info">
              <span className="product-category">Outerwear</span>
              <h3>Kids Jacket</h3>
              <p className="product-desc">Warm and cozy for colder days</p>
              <div className="product-colors">
                <span className="color-dot" style={{background: '#1a1a1a'}}></span>
                <span className="color-dot" style={{background: '#4169e1'}}></span>
                <span className="color-dot" style={{background: '#8b0000'}}></span>
              </div>
              <p className="price">$39.99</p>
              <button className="buy-btn" onClick={() => handleBuyNow('Kids Jacket')}>Buy Now</button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">🧢</div>
            <div className="product-info">
              <span className="product-category">Accessories</span>
              <h3>Kids Cap</h3>
              <p className="product-desc">Cute and protective for sunny days</p>
              <div className="product-colors">
                <span className="color-dot" style={{background: '#ff6347'}}></span>
                <span className="color-dot" style={{background: '#32cd32'}}></span>
                <span className="color-dot" style={{background: '#ffd700'}}></span>
              </div>
              <p className="price">$12.99</p>
              <button className="buy-btn" onClick={() => handleBuyNow('Kids Cap')}>Buy Now</button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">🧦</div>
            <div className="product-info">
              <span className="product-category">Accessories</span>
              <h3>Cotton Socks</h3>
              <p className="product-desc">Comfy socks in fun colors</p>
              <div className="product-colors">
                <span className="color-dot" style={{background: '#fff'}}></span>
                <span className="color-dot" style={{background: '#ffc0cb'}}></span>
                <span className="color-dot" style={{background: '#add8e6'}}></span>
              </div>
              <p className="price">$6.99</p>
              <button className="buy-btn" onClick={() => handleBuyNow('Cotton Socks')}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Aldy's And Quin</h2>
        <div className="about-content">
          <div className="about-text">
            <p>We believe every child deserves to shine! Founded with love, Aldy's And Quin creates comfortable, stylish, and affordable clothing for kids ages 2-15.</p>
            <p>🌈 Soft, breathable fabrics</p>
            <p>🎨 Colorful, fun designs</p>
            <p>💝 Made with care for your little ones</p>
          </div>
          <div className="about-image">👶</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">We'd love to hear from you!</p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="social-links">
          <span>📘 Facebook</span>
          <span>📸 Instagram</span>
          <span>🐦 Twitter</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Aldy's & Quin Kidswear. Made with 💖 for Aldy's And Quin everywhere!</p>
      </footer>
    </div>
  );
}

export default App;

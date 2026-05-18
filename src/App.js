import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ========================================================
  // LOGIC & STATE UNTUK COUNTDOWN TIMER (FLASH SALE)
  // ========================================================
  const [targetDate, setTargetDate] = useState(() => {
    const date = new Date();
    date.setHours(date.getHours() + 2); // Set durasi flash sale 2 jam dari sekarang
    return date;
  });

  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      } else {
        const hrs = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: hrs < 10 ? `0${hrs}` : `${hrs}`,
          minutes: mins < 10 ? `0${mins}` : `${mins}`,
          seconds: secs < 10 ? `0${secs}` : `${secs}`
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // ========================================================
  // STATE UNTUK NAVIGATION SLIDER FLASH SALE
  // ========================================================
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = 6;

  const nextSlide = () => {
    if (currentSlide < maxSlides) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(maxSlides);
    }
  };

  // DATA PRODUK REGULER
  const productsData = [
    { id: 1, category: 'Tops', image: '👕', title: 'Cotton T-Shirt', desc: 'Soft cotton fabric, perfect for everyday wear', colors: ['#fff', '#a8d8ea', '#ffb6c1', '#98d8c8'], price: 'Rp.80k' },
    { id: 2, category: 'Bottoms', image: '👖', title: 'Comfort Pants', desc: 'Stretchable waistband for maximum comfort', colors: ['#4a4a4a', '#8b4513', '#2f4f4f'], price: 'Rp.80k' },
    { id: 3, category: 'Dresses', image: '👗', title: 'Summer Dress', desc: 'Light and breezy, perfect for warm days', colors: ['#ffb6c1', '#fffacd', '#e6e6fa'], price: 'Rp.80k' },
    { id: 4, category: 'Outerwear', image: '🧥', title: 'Kids Jacket', desc: 'Warm and cozy for colder days', colors: ['#1a1a1a', '#4169e1', '#8b0000'], price: 'Rp.80k' },
    { id: 5, category: 'One-Set', image: '🧢', title: 'Kids Cap', desc: 'Cute and protective for sunny days', colors: ['#ff6347', '#32cd32', '#ffd700'], price: 'Rp.80k' },
    { id: 6, category: 'One-Set', image: '🧦', title: 'Cotton Socks', desc: 'Comfy socks in fun colors', colors: ['#fff', '#ffc0cb', '#add8e6'], price: 'Rp.80k' }
  ];

  // ========================================================
  // DATA PRODUK FLASH SALE (DENGAN VARIAN WARNA DAN HARGA CORET)
  // ========================================================
  const flashSaleProducts = [
    { id: 101, title: "Beige boxy T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#a8d8ea', '#ffb6c1', '#98d8c8'], image: "👦👧" },
    { id: 102, title: "Obsidian basic black", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#4a4a4a', '#8b4513', '#2f4f4f'], image: "👦🏻👧🏻" },
    { id: 103, title: "One-set dress cat denim", price: "Rp.40K", originalPrice: "Rp.85K", colors: ['#ffb6c1', '#fffacd', '#e6e6fa'], image: "👧" },
    { id: 104, title: "Essential sand black", price: "Rp.40K", originalPrice: "Rp.75K", colors: ['#1a1a1a', '#4169e1', '#8b0000'], image: "👦🏽👧🏽" },
    { id: 105, title: "Kids Pastel One-Set", price: "Rp.45K", originalPrice: "Rp.90K", colors: ['#ff6347', '#32cd32', '#ffd700'], image: "👚" },
    { id: 106, title: "Summer Breezy Dress", price: "Rp.42K", originalPrice: "Rp.88K", colors: ['#fff', '#ffc0cb', '#add8e6'], image: "👗" },
    { id: 107, title: "Oversize Stripes Tee", price: "Rp.38K", originalPrice: "Rp.70K", colors: ['#fff', '#a8d8ea', '#ffb6c1'], image: "👕" },
    { id: 108, title: "Cozy Linen Pants", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#4a4a4a', '#8b4513'], image: "👖" },
    { id: 109, title: "Denim Jacket Vintage", price: "Rp.50K", originalPrice: "Rp.100K", colors: ['#1a1a1a', '#4169e1'], image: "🧥" },
    { id: 110, title: "Kids Chino Shorts", price: "Rp.35K", originalPrice: "Rp.65K", colors: ['#ff6347', '#32cd32', '#ffd700'], image: "🩳" },
  ];

  const handleBuyNow = (productName) => {
    setSelectedProduct(productName);
    setShowModal(true);
  };

  // PERBAIKAN: Fungsi navigasi smooth scroll manual agar sinkron dengan state React
  const handleNavClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
    setIsMenuOpen(false);

    const targetElement = document.getElementById(tabName);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

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
              <a href="https://shopee.co.id/aldyandquin?entryPoint=ShopBySearch&searchKeyword=aldy%20and%20quin" target="_blank" rel="noopener noreferrer" className="platform-btn shopee">🛒 Shopee</a>
              <a href="https://www.tokopedia.com/aldys-and-quin" target="_blank" rel="noopener noreferrer" className="platform-btn tokopedia">🏪 Tokopedia</a>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <img src="https://i.ibb.co.com/b5YkndF6/LOGO-1.png" alt="aldy's and quin" />
        </a>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeTab === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#collection" className={activeTab === 'collection' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'collection')}>Products</a></li>
          <li><a href="#about" className={activeTab === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#contact" className={activeTab === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className='find123'>Find your <span style={{ color: '#38B6FF' }}>best</span></h1>
          <h1 className='find124'>fashion at</h1>
          <h1 className='find125'>Aldy's & <span style={{ color: '#FFC2C2' }}>Quinn</span></h1>
          <div className="tagline">
            <p>Comfortable & Cute Clothes for Your Little Ones</p>
            <p>where happiness meets style</p>
          </div>
          <a href="#collection" className="cta-button" onClick={(e) => handleNavClick(e, 'collection')}>Shop Now</a>
        </div>
        <img src="/model.png" alt="Kids Fashion" className="hero-image" />
      </section>

      {/* Section Information */}
      <section className="Information">
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">🚚</span>
            <div className="feature-text-group">
              <h4>Free shipping</h4>
              <p>Free shipping across Indonesia with no minimum purchase.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🧑‍💼</span>
            <div className="feature-text-group">
              <h4>Support 24/7</h4>
              <p>Our team is ready to assist you anytime, anywhere.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📦</span>
            <div className="feature-text-group">
              <h4>7 Days return</h4>
              <p>Enjoy a 7-day free return guarantee.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💳</span>
            <div className="feature-text-group">
              <h4>100% Payment secure</h4>
              <p>Safe transactions with trusted payment methods.</p>
            </div>
          </div>
        </div>

        <div className="categories-showcase">
          <h2 className="categories-title">Categories</h2>
          <p className="categories-subtitle">Explore a wide range of comfortable, stylish, and high-quality outfits for your little ones.</p>
          <div className="categories-visual-grid">
            <div className="category-card-visual card-blue">
              <div className="circle-image-wrapper"><img src="https://i.ibb.co.com/8D6vP5G/jacket.png" alt="Boy" /></div>
              <h3>Boy</h3>
            </div>
            <div className="category-card-visual card-yellow">
              <div className="circle-image-wrapper"><img src="https://i.ibb.co.com/X2p7YvW/dress.png" alt="Girl" /></div>
              <h3>Girl</h3>
            </div>
            <div className="category-card-visual card-green">
              <div className="circle-image-wrapper"><img src="https://i.ibb.co.com/qM4WfL6/shoes.png" alt="Unisex wear" /></div>
              <h3>Unisex</h3>
            </div>
            <div className="category-card-visual card-red">
              <div className="circle-image-wrapper"><img src="https://i.ibb.co.com/Y7XW2y9/glasses.png" alt="Accessories" /></div>
              <h3>Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection">
        <div className="collection-header">
          <h2>Our Products</h2>
          <p className="section-subtitle">Explore a wide range of comfortable, stylish, and high-quality outfits for your little ones.</p>
        </div>

        <div className="category-filters">
          <button className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => setSelectedCategory('All')}>All</button>
          <button className={`category-btn ${selectedCategory === 'Tops' ? 'active' : ''}`} onClick={() => setSelectedCategory('Tops')}>Tops</button>
          <button className={`category-btn ${selectedCategory === 'Bottoms' ? 'active' : ''}`} onClick={() => setSelectedCategory('Bottoms')}>Bottoms</button>
          <button className={`category-btn ${selectedCategory === 'Outerwear' ? 'active' : ''}`} onClick={() => setSelectedCategory('Outerwear')}>Outerwear</button>
          <button className={`category-btn ${selectedCategory === 'One-Set' ? 'active' : ''}`} onClick={() => setSelectedCategory('One-Set')}>One-Set</button>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.title}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-colors">
                    {product.colors.map((color, index) => (
                      <span className="color-dot" key={index} style={{ background: color }}></span>
                    ))}
                  </div>
                  <p className="price">{product.price}</p>
                  <button className="buy-btn" onClick={() => handleBuyNow(product.title)}>Buy Now</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products found in this category.</p>
          )}
        </div>
      </section>

      {/* Section Flash Sale */}
      <section id="flash-sale" className="flash-sale-section">
        <div className="flash-sale-header">
          <div className="flash-sale-title-area">
            <h2>Aldy's & Quin Flash sale</h2>
            <p>Don't miss out on our limited-time kids' fashion deals. Grab your favorites before they're gone!</p>
          </div>

          <div className="timer-container">
            <div className="timer-block">{timeLeft.hours}</div>
            <span className="timer-colon">:</span>
            <div className="timer-block">{timeLeft.minutes}</div>
            <span className="timer-colon">:</span>
            <div className="timer-block">{timeLeft.seconds}</div>
          </div>
        </div>

        <div className="slider-wrapper-outer">
          <button className="slider-nav-btn prev" onClick={prevSlide}>‹</button>

          <div className="slider-window">
            <div
              className="flash-sale-track"
              style={{ transform: `translateX(-${currentSlide * (100 / 4)}%)` }}
            >
              {flashSaleProducts.map((product) => (
                <div className="flash-card-container" key={product.id}>
                  <div className="flash-product-card">
                    <div className="flash-image-placeholder">{product.image}</div>
                    <div className="flash-product-info">
                      <h3>{product.title}</h3>

                      <div className="product-colors" style={{ marginBottom: '1rem' }}>
                        {product.colors.map((color, index) => (
                          <span className="color-dot" key={index} style={{ background: color }}></span>
                        ))}
                      </div>

                      <div className="flash-bottom-row">
                        <div className="flash-price-wrapper">
                          <span className="flash-price">{product.price}</span>
                          <span className="flash-original-price">{product.originalPrice}</span>
                        </div>
                        <button className="flash-buy-btn" onClick={() => handleBuyNow(product.title)}>Buy Now</button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-nav-btn next" onClick={nextSlide}>›</button>
        </div>
      </section>

      {/* SECTION ABOUT */}
      <section id="about" className="about-section">
        <div className="about-overlay-card">
          <h2>About Us</h2>
          <p>
            Welcome to Aldy & Quin — a kidswear brand made for little ones who love to
            play, explore, and shine every day. We create comfortable and stylish outfits
            with soft materials, playful colors, and timeless designs that kids and parents
            will love.
          </p>
          <p>
            At Aldy & Quin, we believe childhood should be full of joy, confidence, and
            creativity — because every little adventure deserves the perfect outfit.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">

          {/* KOLOM KIRI */}
          <div className="contact-form-wrapper">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">We'd love to hear from you!</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* KOLOM KANAN */}
          <div className="contact-image-wrapper">
            <img src="/model.png" alt="Kids Fashion Contact" className="contact-side-image" />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img src="https://i.ibb.co.com/b5YkndF6/LOGO-1.png" alt="Aldys & Quin Logo" />
            </div>
            <p className="footer-description">
              a kidswear brand made for little ones who love to play, explore, and shine every day. We create comfortable and stylish outfits with soft materials, playful colors, and timeless designs that kids and parents will love.
            </p>
          </div>

          <div className="footer-links-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="#boy">Boy</a></li>
              <li><a href="#girl">Girl</a></li>
              <li><a href="#unisex">Unisex</a></li>
              <li><a href="#accessories">Accesories</a></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h3>Contact us</h3>
            <ul>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:081234567890">081234567890</a>
              </li>
              <li>
                <span className="contact-icon">📸</span>
                <a href="https://instagram.com/Aldysandquin" target="_blank" rel="noopener noreferrer">@aldysandquin</a>
              </li>
              <li>
                <span className="contact-icon">🎵</span>
                <a href="https://tiktok.com/@aldysandquin.co" target="_blank" rel="noopener noreferrer">@aldysandquin.co</a>
              </li>
              <li>
                <span className="contact-icon">💬</span>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">081234567890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Aldy & quin 2026. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
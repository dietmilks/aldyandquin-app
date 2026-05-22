import React, { useState, useEffect } from 'react';
import './App.css';

// ========================================================
// 1. IMPORT VARIANT GAMBAR PRODUK
// ========================================================

//Xilo
import ATS001 from './assets/ATS001.png';
import ATS002 from './assets/ATS002.png';
import ATS003 from './assets/ATS003.png';
import ATS004 from './assets/ATS004.png';
import ATS005 from './assets/ATS005.png';
import ATS006 from './assets/ATS006.png';
import ATS007 from './assets/ATS007.png';
import SP001 from './assets/SP001.png';

//Xilo Variant
import Henley1 from './assets/Henley1.png';
import Henley2 from './assets/Henley2.png';
import Henley3 from './assets/Henley3.png';
import Twoside1 from './assets/Twoside1.png';
import Twoside2 from './assets/Twoside2.png';
import Twoside3 from './assets/Twoside3.png';
import Twoside4 from './assets/Twoside4.png';
import Basic1 from './assets/Basic1.png';
import Basic2 from './assets/Basic2.png';
import Basic3 from './assets/Basic3.png';
import Basic4 from './assets/Basic4.png';
import Macaron1 from './assets/Macaron1.png';
import Macaron2 from './assets/Macaron2.png';
import Macaron3 from './assets/Macaron3.png';
import Macaron4 from './assets/Macaron4.png';
import Koala1 from './assets/Koala1.png';
import Koala2 from './assets/Koala2.png';
import Dino1 from './assets/Dino1.png';
import Dino2 from './assets/Dino2.png';
import Stripe1 from './assets/Stripe1.png';
import Stripe2 from './assets/Stripe2.png';
import Stripe3 from './assets/Stripe3.png';
import Merah from './assets/Merah.png';
import Abu from './assets/Abu.png';
import Steel from './assets/Steel.png';
import Hitam from './assets/Hitam.png';
import Navy from './assets/Navy.png';
import Sage from './assets/Sage.png';


// Kategori
import Jaket from './assets/Jaket.png';
import Setelan from './assets/Setelan.png';
import Sepatu from './assets/Sepatu.png';
import Kacamata from './assets/Kacamata.png';

import FotoModelPutih from './assets/FotoModel.png';
import FotoModelBiru from './assets/FotoModel.png';
import FotoModelPink from './assets/FotoModel.png';

// Dress
import DressStripe from './assets/Dress Stripe.png';
import DressStripeMerah from './assets/2.png';
import DressStripeHijau from './assets/3.png';
import DressStripeUngu from './assets/4.png';
import DressStripeOrange from './assets/5.png';

//Celana
import Thumbnail from './assets/Thumbnail.png';
import BiruTua from './assets/Biru Tua.png';
import BiruMuda from './assets/Biru Muda.png';
import BiruSedang from './assets/Biru Sedang.png';
import Sandwash from './assets/Sandwash.png';

// Kaos
import tigaWarna from './assets/3 warna.png';
import Obsidian from './assets/obsidian.png';
import Essential from './assets/essential.png';
import Umbra from './assets/umbra.png';

// Skenna 
import EmpatWarna from './assets/4warna.png';
import Washed from './assets/washed.png';
import Sedang from './assets/sedang.png';
import Tua from './assets/tua.png';
import Muda from './assets/muda.png';

// Piyama
import PiyamaBiru from './assets/piyama2.png';
import PiyamaPink from './assets/piyama1.png';

// Setelan
import Denim1 from './assets/denim1.png';
import Denim2 from './assets/denim2.png';
import Denim3 from './assets/denim3.png';
import Denim4 from './assets/denim4.png';

// ========================================================
// KOMPONEN MANDIRI: KARTU PRODUK REGULER
// ========================================================
function ProductCard({ product, onBuy, currentLang }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const currentImage = product.image[selectedColor] || Object.values(product.image)[0];

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={currentImage}
          alt={product.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="product-desc">
          {currentLang === 'en' ? product.desc.en : product.desc.id}
        </p>
        <div className="product-colors">
          {product.colors.map((color, index) => (
            <span
              className={`color-dot ${selectedColor === color ? 'active' : ''}`}
              key={index}
              style={{
                background: color,
                cursor: 'pointer',
                border: selectedColor === color ? '2px solid #FFC2C2' : '1px solid #ccc',
                transform: selectedColor === color ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.2s ease'
              }}
              onClick={() => setSelectedColor(color)}
            ></span>
          ))}
        </div>
        <p className="price">{product.price}</p>
        <button className="buy-btn" onClick={() => onBuy(product.title)}>
          {currentLang === 'en' ? 'Buy Now' : 'Beli Sekarang'}
        </button>
      </div>
    </div>
  );
}

// ========================================================
// KOMPONEN MANDIRI: KARTU PRODUK FLASH SALE
// ========================================================
function FlashSaleCard({ product, onBuy, currentLang }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const currentImage = product.image[selectedColor] || Object.values(product.image)[0];

  return (
    <div className="flash-card-container">
      <div className="flash-product-card">
        <div className="flash-image-placeholder">
          <img
            src={currentImage}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>
        <div className="flash-product-info">
          <h3>{product.title}</h3>
          <div className="product-colors" style={{ marginBottom: '1rem' }}>
            {product.colors.map((color, index) => (
              <span
                className={`color-dot ${selectedColor === color ? 'active' : ''}`}
                key={index}
                style={{
                  background: color,
                  cursor: 'pointer',
                  border: selectedColor === color ? '2px solid #FFC2C2' : '1px solid #ccc',
                  transform: selectedColor === color ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setSelectedColor(color)}
              ></span>
            ))}
          </div>
          <div className="flash-bottom-row">
            <div className="flash-price-wrapper">
              <span className="flash-price">{product.price}</span>
              <span className="flash-original-price">{product.originalPrice}</span>
            </div>
            <button className="flash-buy-btn" onClick={() => onBuy(product.title)}>
              {currentLang === 'en' ? 'Buy Now' : 'Beli Sekarang'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================================
// MAIN COMPONENT: APP
// ========================================================
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // State untuk Bahasa: 'en' (Inggris) atau 'id' (Indonesia)
  const [currentLang, setCurrentLang] = useState('id');

  // Logic Countdown Timer
  const [targetDate, setTargetDate] = useState(() => {
    const date = new Date();
    date.setHours(date.getHours() + 2);
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

  // Logic Slider Flash Sale
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

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  // DATA PRODUK DENGAN DUA BAHASA (EN & ID)
  const productsData = [
    {
      id: 1,
      category: 'Dresses',
      image: { '#fff': DressStripe, '#6effb7': DressStripeHijau, '#b85858': DressStripeMerah, '#ff9741': DressStripeOrange, '#955daf': DressStripeUngu },
      title: 'Stripes cotton dress',
      desc: {
        en: 'Soft cotton fabric, perfect for everyday wear',
        id: 'Bahan katun lembut, sangat cocok untuk dipakai sehari-hari'
      },
      colors: ['#fff', '#6effb7', '#b85858', '#ff9741', '#955daf'],
      price: 'Rp.80k'
    },
    {
      id: 2,
      category: 'Bottoms',
      image: { '#4a4a4a': Thumbnail, '#75e3ff': BiruMuda, '#001aff': BiruTua, '#315adf': BiruSedang, '#c0c0c0': Sandwash },
      title: 'Sweet Pants ',
      desc: {
        en: 'Stretchable waistband for maximum comfort',
        id: 'Pinggang elastis untuk kenyamanan maksimal bergerak'
      },
      colors: ['#4a4a4a', '#75e3ff', '#001aff', '#315adf', '#c0c0c0'],
      price: 'Rp.80k'
    },
    {
      id: 3,
      category: 'Tops',
      image: { '#adadad': tigaWarna, '#0c0c0c': Obsidian, '#373652': Umbra, '#242424': Essential },
      title: 'Black basic T-shirt',
      desc: {
        en: 'Light and breezy, perfect for warm days',
        id: 'Ringan dan sejuk, pilihan terbaik untuk hari yang cerah'
      },
      colors: ['#adadad', '#0c0c0c', '#373652', '#242424'],
      price: 'Rp.80k'
    },
    {
      id: 4,
      category: 'Bottoms',
      image: { '#1a1a1a': EmpatWarna, '#9eb6ff': Muda, '#00014d': Tua, '#1c59ff': Sedang, '#a1a1a1': Washed },
      title: 'Cozy cargo denim pants',
      desc: {
        en: 'Warm and cozy for colder days',
        id: 'Hangat dan nyaman untuk melindungi anak di hari dingin'
      },
      colors: ['#1a1a1a', '#9eb6ff', '#00014d', '#1c59ff', '#a1a1a1'],
      price: 'Rp.80k'
    },
    {
      id: 5,
      category: 'One-Set',
      image: { '#4781ff': PiyamaBiru, '#ff6cff': PiyamaPink },
      title: 'Kids sanrio pajamas set',
      desc: {
        en: 'Cute and cozy for bedtime',
        id: 'Lucu dan nyaman untuk waktu tidur'
      },
      colors: ['#4781ff', '#ff6cff'],
      price: 'Rp.80k'
    },
    {
      id: 6,
      category: 'One-Set',
      image: { '#81adff': Denim1, '#418dff': Denim2, '#00357a': Denim3, '#6a868a': Denim4 },
      title: 'Denim setelan one-set',
      desc: {
        en: 'Comfy denim set perfect for summer',
        id: 'Set denim nyaman yang sempurna untuk musim panas'
      },
      colors: ['#81adff', '#418dff', '#00357a', '#6a868a'],
      price: 'Rp.80k'
    }
  ];

  const flashSaleProducts = [
    { id: 101, title: "Macaron baby tee T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#ff7272', '#926b6b', '#64ffaa', '#001aff'], image: { '#fff': ATS001, '#ff7272': Macaron1, '#926b6b': Macaron2, '#64ffaa': Macaron3, '#001aff': Macaron4, } },
    { id: 101, title: "Two side baby tee T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#8d5f5f', '#ff7878', '#1861ff', '#baffd1' ], image: { '#fff': ATS002, '#8d5f5f': Twoside1, '#ff7878': Twoside2, '#1861ff': Twoside3, '#baffd1': Twoside4 } },
    { id: 101, title: "Basic baby tee T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#a56c6c', '#ff4f4f', '#001aff', '#4cffa6' ], image: { '#fff': ATS003, '#a56c6c': Basic1, '#ff4f4f': Basic2, '#001aff': Basic3, '#4cffa6': Basic4 } },
    { id: 101, title: "Henley baby tee T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#aa4c4c', '#5ae488', '#7e5454' ], image: { '#fff': ATS004, '#aa4c4c': Henley1, '#5ae488': Henley2, '#7e5454': Henley3 } },
    { id: 101, title: "Koala baby tee T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#519cff', '#d271ff'], image: { '#fff': ATS005, '#519cff': Koala1, '#d271ff': Koala2,  } },
    { id: 101, title: "Dino baby tee T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#3a9655', '#b3b871'], image: { '#fff': ATS006, '#3a9655': Dino1, '#b3b871': Dino2  } },
    { id: 101, title: "Stripe baby tee T-shirt", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#ff0000', '#8effa6', '#000000'], image: { '#fff': ATS007, '#ff0000': Stripe1, '#8effa6': Stripe2, '#000000': Stripe3 } },
    { id: 101, title: "Combed fleece short pants", price: "Rp.40K", originalPrice: "Rp.80K", colors: ['#fff', '#ff0000', '#727272', '#649aff', '#000000', '#283997', '#6bf5a4'], image: { '#fff': SP001, '#ff0000': Merah, '#727272': Abu, '#649aff': Steel, '#000000': Hitam, '#283997': Navy, '#6bf5a4': Sage } },
  ];

  const faqData = [
    {
      question: {
        en: "How do I choose the right clothing size for my child?",
        id: "Bagaimana cara menentukan ukuran baju yang tepat untuk anak?"
      },
      answer: {
        en: "We highly recommend measuring your child's current chest width and clothing length, then matching it with the size chart available in the product description on our Shopee or Tokopedia platforms. Age is only an estimate since every child grows differently.",
        id: "Kami menyarankan untuk mengukur lebar dada dan panjang baju anak saat ini, lalu mencocokkannya dengan size chart yang tersedia di deskripsi produk platform Shopee atau Tokopedia kami. Usia hanya perkiraan karena pertumbuhan setiap anak berbeda."
      }
    },
    {
      question: {
        en: "Are Aldy's & Quin clothes safe for sensitive baby skin?",
        id: "Apakah bahan baju dari Aldy's & Quin aman untuk kulit bayi yang sensitif?"
      },
      answer: {
        en: "Yes, absolutely! Our products are made from selected premium cotton that is soft, breathable, and free from harmful chemicals, making them very safe and comfortable for children's sensitive skin.",
        id: "Ya, tentu saja. Produk kami menggunakan bahan katun premium pilihan yang lembut, memiliki sirkulasi udara yang baik, serta bebas dari zat kimia berbahaya sehingga sangat aman dan nyaman untuk kulit sensitif anak."
      }
    },
    {
      question: {
        en: "How long is the estimated delivery time for my order?",
        id: "Berapa lama estimasi pengiriman pesanan saya?"
      },
      answer: {
        en: "The packaging and processing take 1-2 business days. The actual delivery time on the road depends on your chosen courier service and your delivery location.",
        id: "Proses pengemasan pesanan dilakukan dalam waktu 1-2 hari kerja. Estimasi lamanya pengiriman di perjalanan bergantung pada layanan kurir pilihan Anda dan lokasi tujuan pengiriman."
      }
    },
    {
      question: {
        en: "What is the return policy if the size doesn't fit?",
        id: "Bagaimana kebijakan pengembalian barang jika ukuran tidak pas?"
      },
      answer: {
        en: "We provide a 7-day return warranty if the product received has a manufacturing defect or if the wrong item was sent. Please ensure the hangtag is still attached and the product has not been washed when filing a complaint via the marketplace.",
        id: "Kami menyediakan garansi 7 hari pengembalian jika produk yang diterima cacat produksi atau salah kirim. Pastikan hangtag masih terpasang dan produk belum dicuci saat mengajukan komplain via marketplace."
      }
    }
  ];

  const handleBuyNow = (productName) => {
    setSelectedProduct(productName);
    setShowModal(true);
  };

  const handleCategoryClick = (categoryName) => {
    // 1. Ubah filter kategori
    setSelectedCategory(categoryName);
    
    // 2. Scroll ke bagian produk dengan mulus
    const targetElement = document.getElementById('collection');
    if (targetElement) {
      const yOffset = -80; // Menyesuaikan tinggi navbar agar tidak tertutup
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
            <h3>{currentLang === 'en' ? `Buy ${selectedProduct}` : `Beli ${selectedProduct}`}</h3>
            <p>{currentLang === 'en' ? 'Choose your preferred platform:' : 'Pilih marketplace favorit Anda:'}</p>
            <div className="platform-buttons">
              <a
                href="https://shopee.co.id/aldyandquin?entryPoint=ShopBySearch&searchKeyword=aldy%20and%20quin"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn shopee"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg"
                  alt="Shopee Logo"
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
                Shopee
              </a>
              <a
                href="https://www.tokopedia.com/aldys-and-quin"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn tokopedia"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <img
                  src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/36c10b42.svg"
                  alt="Tokopedia Logo"
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
                Tokopedia
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <img src="/LOGO (4).png" alt="Aldy's & Quin Logo" />
        </a>

        {/* Kontrol Sebelah Kanan Navbar dengan Tombol Bahasa Khusus Android/Mobile */}
        <div className="navbar-mobile-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            className="lang-toggle-btn mobile-only-lang"
            onClick={() => setCurrentLang(currentLang === 'en' ? 'id' : 'en')}
            style={{
              background: '#38B6FF',
              color: '#fff',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            🌐 {currentLang === 'en' ? 'EN' : 'ID'}
          </button>

          <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {/* PERBAIKAN NAVBAR: Menggunakan operator ternary agar Home menjadi Beranda dalam Bahasa Indonesia */}
          <li><a href="#home" className={activeTab === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>{currentLang === 'en' ? 'Home' : 'Beranda'}</a></li>
          <li><a href="#collection" className={activeTab === 'collection' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'collection')}>{currentLang === 'en' ? 'Products' : 'Produk'}</a></li>
          <li><a href="#about" className={activeTab === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>{currentLang === 'en' ? 'About' : 'Tentang'}</a></li>
          <li><a href="#faq" className={activeTab === 'faq' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a></li>

          {/* TOMBOL TOGGLE BAHASA KHUSUS DESKTOP */}
          <li className="desktop-only-lang">
            <button
              className="lang-toggle-btn"
              onClick={() => setCurrentLang(currentLang === 'en' ? 'id' : 'en')}
              style={{
                background: '#38B6FF',
                color: '#fff',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '14px',
                marginLeft: '10px'
              }}
            >
              🌐 {currentLang === 'en' ? 'EN' : 'ID'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          {currentLang === 'en' ? (
            <>
              <h1 className='find123'>Find your <span style={{ color: '#38B6FF' }}>best</span></h1>
              <h1 className='find124'>fashion at</h1>
              <h1 className='find125'>Aldy's & <span style={{ color: '#FFC2C2' }}>Quinn</span></h1>
            </>
          ) : (
            <>
              <h1 className='find123'>Temukan fashion</h1>
              <h1 className='find124'><span style={{ color: '#38B6FF' }}>terbaik</span> anak di</h1>
              <h1 className='find125'>Aldy's & <span style={{ color: '#FFC2C2' }}>Quinn</span></h1>
            </>
          )}
          <div className="tagline">
            <p>{currentLang === 'en' ? 'Comfortable & cute clothes for your little ones' : 'Pakaian yang nyaman & lucu untuk buah hati anda'}</p>
            <p>{currentLang === 'en' ? 'where happiness meets style' : 'di mana kebahagiaan bertemu dengan gaya'}</p>
          </div>
          <a href="#collection" className="cta-button" onClick={(e) => handleNavClick(e, 'collection')}>
            {currentLang === 'en' ? 'Shop Now' : 'Belanja Sekarang'}
          </a>
        </div>
        <img src="/model.png" alt="Kids Fashion" className="hero-image" />
      </section>

      {/* Section Information */}
      <section className="Information">
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">🚚</span>
            <div className="feature-text-group">
              <h4>{currentLang === 'en' ? 'Free shipping' : 'Gratis Ongkir'}</h4>
              <p>{currentLang === 'en' ? 'Free shipping across Indonesia with no minimum purchase.' : 'Gratis ongkos kirim ke seluruh Indonesia tanpa minimum pembelian.'}</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🧑‍💼</span>
            <div className="feature-text-group">
              <h4>{currentLang === 'en' ? 'Support 24/7' : 'Layanan 24/7'}</h4>
              <p>{currentLang === 'en' ? 'Our team is ready to assist you anytime, anywhere.' : 'Tim kami siap membantu Anda kapan saja dan di mana saja.'}</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📦</span>
            <div className="feature-text-group">
              <h4>{currentLang === 'en' ? '7 Days return' : 'Garansi 7 Hari'}</h4>
              <p>{currentLang === 'en' ? 'Enjoy a 7-day free return guarantee.' : 'Nikmati jaminan pengembalian barang gratis selama 7 hari.'}</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💳</span>
            <div className="feature-text-group">
              <h4>{currentLang === 'en' ? '100% Payment secure' : 'Pembayaran Aman'}</h4>
              <p>{currentLang === 'en' ? 'Safe transactions with trusted payment methods.' : 'Transaksi dijamin aman dengan metode pembayaran terpercaya.'}</p>
            </div>
          </div>
        </div>

        {/* SECTION KATEGORI */}
        <div className="categories-showcase">
          <h2 className="categories-title">{currentLang === 'en' ? 'Categories' : 'Kategori'}</h2>
          
          {/* Teks Subtitle Sesuai Screenshot */}
          <p className="categories-subtitle">
            {currentLang === 'en'
              ? 'Explore a wide range of comfortable, stylish, and high-quality outfits for your little ones.'
              : 'Jelajahi berbagai pilihan pakaian anak yang nyaman, modis, dan berkualitas tinggi.'}
          </p>

          <div className="categories-visual-grid">
            {/* Kategori Boy -> Filter 'Tops' (Atasan) */}
            <div className="category-item-wrapper" onClick={() => handleCategoryClick('Tops')}>
              <div className="category-card-visual card-blue">
                <img src={Jaket} alt="Boy" className="category-image" />
              </div>
              <h3>{currentLang === 'en' ? 'Boy' : 'Anak Laki-laki'}</h3>
            </div>

            {/* Kategori Girl -> Filter 'Dresses' */}
            <div className="category-item-wrapper" onClick={() => handleCategoryClick('Dresses')}>
              <div className="category-card-visual card-yellow">
                <img src={Setelan} alt="Girl" className="category-image" />
              </div>
              <h3>{currentLang === 'en' ? 'Girl' : 'Anak Perempuan'}</h3>
            </div>

            {/* Kategori Unisex -> Filter 'Bottoms' */}
            <div className="category-item-wrapper" onClick={() => handleCategoryClick('Bottoms')}>
              <div className="category-card-visual card-green">
                <img src={Sepatu} alt="Unisex wear" className="category-image" />
              </div>
              <h3>Unisex wear</h3>
            </div>

            {/* Kategori Aksesoris -> Filter 'One-Set' */}
            <div className="category-item-wrapper" onClick={() => handleCategoryClick('One-Set')}>
              <div className="category-card-visual card-red">
                <img src={Kacamata} alt="Accessories" className="category-image" />
              </div>
              <h3>{currentLang === 'en' ? 'Accessories' : 'Aksesoris'}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection">
        <div className="collection-header">
          <h2>{currentLang === 'en' ? 'Our Products' : 'Produk Kami'}</h2>
          <p className="section-subtitle">
            {currentLang === 'en'
              ? 'Explore a wide range of comfortable, stylish, and high-quality outfits for your little ones. Find more on our official shop!'
              : 'Jelajahi berbagai pilihan pakaian anak yang nyaman, modis, dan berkualitas tinggi. Temukan lebih banyak di toko resmi kami!'}
          </p>
        </div>

        <div className="category-filters">
          <button className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => setSelectedCategory('All')}>
            {currentLang === 'en' ? 'All' : 'Semua'}
          </button>
          <button className={`category-btn ${selectedCategory === 'Tops' ? 'active' : ''}`} onClick={() => setSelectedCategory('Tops')}>
            {currentLang === 'en' ? 'Tops' : 'Atasan'}
          </button>
          <button className={`category-btn ${selectedCategory === 'Bottoms' ? 'active' : ''}`} onClick={() => setSelectedCategory('Bottoms')}>
            {currentLang === 'en' ? 'Bottoms' : 'Bawahan'}
          </button>
          <button className={`category-btn ${selectedCategory === 'Outerwear' ? 'active' : ''}`} onClick={() => setSelectedCategory('Outerwear')}>
            {currentLang === 'en' ? 'Outerwear' : 'Pakaian Luar'}
          </button>
          <button className={`category-btn ${selectedCategory === 'One-Set' ? 'active' : ''}`} onClick={() => setSelectedCategory('One-Set')}>
            {currentLang === 'en' ? 'One-Set' : 'Setelan'}
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuy={handleBuyNow}
                currentLang={currentLang}
              />
            ))
          ) : (
            <p className="no-products">
              {currentLang === 'en' ? 'No products found in this category.' : 'Produk tidak ditemukan di kategori ini.'}
            </p>
          )}
        </div>
      </section>

      {/* Section Flash Sale */}
      <section id="flash-sale" className="flash-sale-section">
        <div className="flash-sale-header">
          <div className="flash-sale-title-area">
            <h2>Aldy's & Quin Flash sale</h2>
            <p>
              {currentLang === 'en'
                ? "Don't miss out on our limited-time kids' fashion deals. Grab your favorites before they're gone!"
                : "Jangan lewatkan penawaran terbatas fashion anak kami. Ambil produk favorit Anda sebelum kehabisan!"}
            </p>
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
                <FlashSaleCard
                  key={product.id}
                  product={product}
                  onBuy={handleBuyNow}
                  currentLang={currentLang}
                />
              ))}
            </div>
          </div>

          <button className="slider-nav-btn next" onClick={nextSlide}>›</button>
        </div>
      </section>

      {/* SECTION ABOUT */}
      <section id="about" className="about-section">
        <div className="about-overlay-card">
          <h2>{currentLang === 'en' ? 'About Us' : 'Tentang Kami'}</h2>
          {currentLang === 'en' ? (
            <>
              <p>
                Welcome to Aldy & Quin — Aldy's and Quin launched in 2025 with a simple vision: to accompany your little one's childhood in comfort and style. We believe that children's clothing is more than just body protection, but also a loyal companion on every adventure—from active play to quiet rest.
              </p>
              <p>
                At Aldy & Quin, we believe childhood should be full of joy, confidence, and
                creativity — because every little adventure deserves the perfect outfit.
              </p>
            </>
          ) : (
            <>
              <p>
                Selamat datang di Aldy & Quin — Aldy’s and Quin hadir pada tahun 2025 dengan satu visi sederhana: mendampingi masa kecil si kecil dengan penuh kenyamanan dan gaya. Kami percaya bahwa pakaian anak bukan hanya sekadar pelindung tubuh, melainkan teman setia dalam setiap petualangan mereka—dari saat bermain yang aktif hingga momen istirahat yang tenang.
              </p>
              <p>
                Di Aldy & Quin, kami percaya masa kecil harus dipenuhi dengan kebahagiaan, rasa percaya diri,
                dan kreativitas — karena setiap petualangan kecil si buah hati berhak mendapatkan pakaian terbaik.
              </p>
            </>
          )}
        </div>
      </section>

      {/* SECTION FAQ */}
      <section id="faq" className="faq-section">
        <div className="faq-container">
          {/* PERBAIKAN FAQ: Ditambahkan pengondisian bahasa untuk judul utama FAQ */}
          <h2 className="faq-title">{currentLang === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Diajukan'}</h2>
          <p className="faq-subtitle">
            {currentLang === 'en'
              ? 'Have questions about our products? Find your quick answers below.'
              : 'Punya pertanyaan seputar produk kami? Temukan jawaban ringkasnya di bawah ini.'}
          </p>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question-row">
                  <h3>
                    {currentLang === 'en' ? item.question.en : item.question.id}
                  </h3>
                  <span className="faq-icon-toggle">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer-block">
                  <p>
                    {currentLang === 'en' ? item.answer.en : item.answer.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-container" id="contact">
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/LOGO (4).png" alt="Aldys & Quin Logo" style={{ width: '90px', height: 'auto' }} />
              <img src="/LOGO (5).png" alt="Additional Logo" style={{ width: '90px', height: 'auto' }} />
            </div>
            <p className="footer-description">
              {currentLang === 'en'
                ? 'A kidswear brand made for little ones who love to play, explore, and shine every day. We create comfortable and stylish outfits with soft materials, playful colors, and timeless designs.'
                : 'Brand pakaian anak yang dibuat untuk si kecil yang suka bermain, bereksplorasi, dan ceria setiap hari. Kami menciptakan pakaian yang nyaman dan penuh gaya dengan bahan lembut dan warna ceria.'}
            </p>
          </div>

          <div className="footer-links-section">
            <h3>{currentLang === 'en' ? 'Categories' : 'Kategori'}</h3>
            <ul>
              <li><a href="#boy">{currentLang === 'en' ? 'Boy' : 'Laki-laki'}</a></li>
              <li><a href="#girl">{currentLang === 'en' ? 'Girl' : 'Perempuan'}</a></li>
              <li><a href="#unisex">Unisex</a></li>
              <li><a href="#accessories">{currentLang === 'en' ? 'Accessories' : 'Aksesoris'}</a></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h3>{currentLang === 'en' ? 'Contact us' : 'Hubungi Kami'}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {/* PERBAIKAN DI SINI: Menambahkan baris info Email */}
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Email" style={{ width: '20px', height: '20px' }} />
                </span>
                <a href="mailto:aldyandquin@gmail.com">Email: aldyandquin@gmail.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="Phone" style={{ width: '20px', height: '20px' }} />
                </span>
                <a href="tel:081111161164">081111161164</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style={{ width: '20px', height: '20px' }} />
                </span>
                <a href="https://instagram.com/Aldysandquin" target="_blank" rel="noopener noreferrer">@aldysandquin</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg" alt="TikTok" style={{ width: '20px', height: '20px' }} />
                </span>
                <a href="https://tiktok.com/@aldysandquin.co" target="_blank" rel="noopener noreferrer">@aldysandquin.co</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '20px', height: '20px' }} />
                </span>
                <a href="https://wa.me/6281111161164" target="_blank" rel="noopener noreferrer">081111161164</a>
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
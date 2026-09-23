import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDark }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoKey, setLogoKey] = useState(0);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoKey(prev => prev + 1);
    }, 8000); // 8 second loop (animations take ~4s, then a ~4s pause)
    return () => clearInterval(interval);
  }, []);

  const logoText = "Babyboo".split("");

  return (
    <nav className="navbar">
      <div className="container nav-container">
        
        {/* Logo */}
        <a href="#home" className="logo">
          <h1 className="animated-logo" key={logoKey}>
            {logoText.map((char, index) => (
              <span key={index} style={{ '--char-index': index }}>
                {char}
              </span>
            ))}
          </h1>
          <p>Premium Baby Pants</p>
        </a>
        
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="close-menu" onClick={toggleMenu}><i className="fa-solid fa-xmark"></i></div>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#products" onClick={toggleMenu}>Products</a></li>
          <li><a href="#features" onClick={toggleMenu}>Why Babyboo</a></li>
          <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        
        <div className="nav-actions">
          <div className="theme-toggle" onClick={toggleTheme} style={{cursor: 'pointer', fontSize: '1.2rem', color: isDark ? 'var(--accent-yellow)' : 'var(--text-gray)'}}>
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </div>
          
          <div className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-badge">2</span>
          </div>
          <a href="tel:+94777763766" className="btn btn-primary d-none-mobile" style={{textDecoration: 'none'}}>
            Order Now <i className="fa-solid fa-phone" style={{marginLeft: '5px'}}></i>
          </a>
          
          <div className="hamburger-menu" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

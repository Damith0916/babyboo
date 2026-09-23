import React from 'react';
import './Footer.css';
import babyImg from '../assets/cta.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer-wrapper">
      {/* CTA Section */}
      <div className="cta-section">
        <div className="container cta-container">
          <div className="cta-img animate-float" data-aos="fade-right">
            <img src={babyImg} alt="Cute baby with teddy" />
          </div>
          <div className="cta-content">
            <h2 data-aos="fade-up">Give Your Baby<br/>the Best Care Today <i className="fa-solid fa-heart text-pink"></i></h2>
            <p data-aos="fade-up" data-aos-delay="100">Premium quality. Trusted by parents. Loved by babies.</p>
            <a href="tel:+94777763766" className="btn btn-primary" data-aos="fade-up" data-aos-delay="200" style={{textDecoration: 'none', display: 'inline-block'}}>
              Order Now <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-logo-col" data-aos="fade-up">
            <div className="logo">
              <h1>Baby<span>boo</span></h1>
              <p>Premium quality with ultra comfy</p>
            </div>
          </div>
          
          <div className="footer-links-col" data-aos="fade-up" data-aos-delay="100">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#features">Why Babyboo</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact-col" data-aos="fade-up" data-aos-delay="200">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="tel:+94777763766" style={{color: 'inherit', textDecoration: 'none'}}><i className="fa-solid fa-phone"></i> +94 77 776 3766</a></li>
              <li><a href="mailto:betterhygiene.net@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}><i className="fa-solid fa-envelope"></i> betterhygiene.net@gmail.com</a></li>
            </ul>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom container">
          <p>&copy; 2024 Babyboo. All rights reserved.</p>
          <p>Made with <i className="fa-solid fa-heart text-pink"></i> for little ones</p>
          <p style={{marginTop: '8px', fontSize: '0.75rem', opacity: '0.6'}}>Powered by DSRZone</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
